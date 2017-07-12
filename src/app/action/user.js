import {createAction} from 'redux-actions'
import {
  getLocationByIp,
  isAddressValid
} from 'Lib/geolocation'
import * as printingEngine from 'Lib/printing-engine'
import {identify, peopleSet} from 'Service/mixpanel'
import {normalizeTelephoneNumber} from 'Lib/normalize'

import TYPE from '../type'
import {goToCart} from './navigation'

import {
  openAddressModal,
  openPriceChangedModal,
  openPriceLocationChangedModal,
  openFetchingPriceModal
} from './modal'
import {createPriceRequest, recalculateSelectedOffer} from './price'

// Private actions

const shippingAddressChanged = createAction(
  TYPE.USER.SHIPPING_ADDRESS_CHANGED,
  address => ({address})
)
const userCreated = createAction(
  TYPE.USER.CREATED,
  userId => ({userId})
)

// Public actions

export const detectAddress = () => async (dispatch) => {
  try {
    const address = await getLocationByIp()
    dispatch(shippingAddressChanged(address))
  } catch (error) {
    dispatch(openAddressModal())
  }
}

export const createUser = () => async (dispatch, getState) => {
  const user = getState().user.user
  const {userId} = await printingEngine.createUser({user})
  identify(userId)  // Send user information to Mixpanel
  return dispatch(userCreated(userId))
}

export const updateUser = user => async (dispatch, getState) => {
  const userId = getState().user.userId
  await printingEngine.updateUser({userId, user})
  return dispatch(createAction(TYPE.USER.UPDATED)(user))
}

export const updateLocation = address => async (dispatch, getState) => {
  dispatch(shippingAddressChanged(address))

  if (!isAddressValid(address)) {
    // Open address modal if address is not valid
    dispatch(openAddressModal())
  } else {
    if (!getState().user.userId) {  // No user created so far
      await dispatch(createUser())
    }

    // Update prices
    dispatch(createPriceRequest())
  }
}

export const reviewOrder = form => async (dispatch, getState) => {
  const user = getState().user.user
  const oldShippingAddress = user.shippingAddress
  const oldOffer = getState().price.selectedOffer
  const newShippingAddress = form.shippingAddress

  form.phoneNumber = normalizeTelephoneNumber(form.phoneNumber)

  // Send user information to Mixpanel
  peopleSet({
    $name: `${form.shippingAddress.firstName} ${form.shippingAddress.lastName}`,
    $city: form.shippingAddress.city,
    $country: form.shippingAddress.countryCode,
    $email: form.emailAddress,
    raw: form
  })

  dispatch(openFetchingPriceModal())
  await dispatch(updateUser(form))
  await dispatch(recalculateSelectedOffer())

  const newOffer = getState().price.selectedOffer
  const hasPriceChanged = oldOffer.totalPrice !== newOffer.totalPrice
  const wasEstimatedPrice = oldOffer.priceEstimated

  if (wasEstimatedPrice) {
    dispatch(openPriceChangedModal())
  } else if (hasPriceChanged) {
    dispatch(openPriceLocationChangedModal(oldShippingAddress, newShippingAddress))
  } else {
    dispatch(goToCart())
  }
}
