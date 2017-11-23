import {createAction} from 'redux-actions'

import {createUser} from 'Action/user'
import * as printingEngine from 'Lib/printing-engine'
import {getUpdatedOffer} from 'Lib/offer'
import {poll, debouncedPoll, stopPoll} from 'Lib/poll'
import {getBestOfferForMaterialConfig} from 'Lib/material'
import TYPE, {ERROR_TYPE} from '../action-type'

const POLL_NAME = 'price'
const RECALC_POLL_NAME = 'price_recalc'

// Private actions

const clearOffers = createAction(
  TYPE.PRICE.CLEAR_OFFERS
)
const priceRequested = createAction(
  TYPE.PRICE.REQUESTED,
  priceId => ({priceId})
)
const priceReceived = createAction(
  TYPE.PRICE.RECEIVED,
  price => ({price})
)
const gotError = createAction(
  TYPE.PRICE.GOT_ERROR,
  error => ({error})
)
const priceTimeout = createAction(TYPE.PRICE.TIMEOUT)

const setBestOffer = createAction(
  TYPE.PRICE.SET_BEST_OFFER,
  offer => ({offer})
)

// Public actions

export const selectOffer = createAction(
  TYPE.PRICE.SELECT_OFFER,
  offer => ({offer})
)

export const selectBestOffer = (offers, materialConfig) => (dispatch) => {
  const offer = getBestOfferForMaterialConfig(offers, materialConfig)

  dispatch(setBestOffer(offer))
}

export const refreshSelectedOffer = () => (dispatch, getState) => {
  const {
    price: {
      offers,
      selectedOffer
    }
  } = getState()

  if (selectedOffer) {
    const offer = offers ? getUpdatedOffer(selectedOffer, offers) : null
    // if (!offer) // TODO: show that offer is no longer available
    dispatch(selectOffer(offer))
  }
}

export const createPriceRequest = ({
  refresh = false,
  debounce = false
} = {}) => (dispatch, getState) => {
  const {
    material: {
      materialOptions
    },
    model: {
      modelId,
      quantity
    },
    user: {
      userId
    }
  } = getState()

  if (!modelId) {
    stopPoll(POLL_NAME)
    return Promise.resolve()
  }

  const itemArrays = [
    [{
      modelId,
      materialConfigIds: materialOptions.map(o => o.materialConfigId),
      quantity
    }]
  ]

  return Promise.all(itemArrays.map((items) => {
    const options = {
      isEstimate: false, // always fetch real prices
      caching: true, // cache prices for next user
      refresh, // force refresh when requested
      userId,
      items
    }

    dispatch(clearOffers())

    const usePoll = debounce ? debouncedPoll : poll
    return usePoll(`${POLL_NAME}-${modelId}`, async (priceId) => {
      const {price, isComplete} = await printingEngine.getPriceWithStatus({priceId})
      dispatch(priceReceived(price))
      return isComplete
    }, async () => {
      const {priceId} = await printingEngine.createPriceRequest(options)
      dispatch(priceRequested(priceId))
      return priceId
    })
    .then(() => {
      // We need to update the selectedOffer if applicable
      dispatch(refreshSelectedOffer())
    })
    .catch((error) => {
      // Handle timeout separately
      if (error.type === ERROR_TYPE.POLL_TIMEOUT) {
        dispatch(priceTimeout(error))
        return
      }

      // Ignore special error when price request was overwritten or stopped
      if (error.type === ERROR_TYPE.POLL_OVERWRITTEN ||
        error.type === ERROR_TYPE.POLL_STOPPED) {
        return
      }

      dispatch(gotError(error))

      // Throw again to trigger fatal error modal
      throw error
    })
  }))
}

export const recalculateSelectedOffer = () => (dispatch, getState) => {
  const {
    model: {
      models
    },
    price: {
      selectedOffer
    },
    user: {
      userId
    }
  } = getState()

  // Stop any other price polling
  stopPoll(POLL_NAME)

  const items = models.map(({modelId, quantity}) => ({
    modelId,
    materialConfigIds: [selectedOffer.materialConfigId],
    quantity
  }))

  const options = {
    isEstimate: false, // always get real price for recalculated offer
    caching: false, // do not cache price recalc with a single material/vendor
    vendorId: selectedOffer.printingService,
    userId,
    items
  }

  return poll(RECALC_POLL_NAME, async (priceId) => {
    const {price} = await printingEngine.getPriceWithStatus({priceId})
    const updatedOffer = getUpdatedOffer(selectedOffer, price.offers)

    if (!updatedOffer || updatedOffer.priceEstimated) {
      return false
    }

    dispatch(selectOffer(updatedOffer))

    return true
  }, async () => {
    const {priceId} = await printingEngine.createPriceRequest(options)
    dispatch(priceRequested(priceId))
    return priceId
  })
  .catch((error) => {
    // Every error here is fatal!

    dispatch(priceReceived(error))

    // Throw again to trigger fatal error modal
    throw error
  })
}

export const createDebouncedPriceRequest = () => createPriceRequest({debounce: true})
