import {createAction} from 'redux-actions'
import {
  getLocationByIp,
  isAddressValid
} from 'Lib/geolocation'
import * as printingEngine from 'Lib/printing-engine'
import {identify} from 'Service/mixpanel'
import {setUserContext} from 'Service/logging'

import TYPE from '../type'

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
  const address = await getLocationByIp()
  dispatch(shippingAddressChanged(address))
}

export const createUser = () => async (dispatch, getState) => {
  const user = getState().user.user
  const {userId} = await printingEngine.createUser({user})
  identify(userId)  // Send user information to Mixpanel
  setUserContext({
    id: userId
  })
  dispatch(userCreated(userId))
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
    // dispatch(openAddressModal())
  } else if (!getState().user.userId) {  // No user created so far
    await dispatch(createUser())
  } else {
    await dispatch(updateUser(getState().user.user))
  }
}
