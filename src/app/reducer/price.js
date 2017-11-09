// @flow

import cloneDeep from 'lodash/cloneDeep'

import TYPE from '../action-type'
// priceId: null,
// offers: null,
// printingServiceComplete: null,
// selectedOffer: null,
// error: null

const initialState = {
  pricesByModelId: {}
}

function handleClearOffers (state, {payload: {modelId}}) {
  const currentState = state.pricesByModelId[modelId] || {}

  const newState = {
    ...currentState,
    priceId: null,
    offers: null,
    printingServiceComplete: null,
    selectedOffer: null,
    error: null
  }

  state.pricesByModelId[modelId] = newState

  return {
    ...state
  }
}

function handleSelectOffer (state, {payload: {offer, modelId}}) {
  const currentState = state.pricesByModelId[modelId] || {}

  const newState = {
    ...currentState,
    selectedOffer: cloneDeep(offer)
  }

  state.pricesByModelId[modelId] = newState

  return {
    ...state
  }
}

function handlePriceRequested (state, {payload: {priceId, modelId}}) {
  const currentState = state.pricesByModelId[modelId] || {}

  const newState = {
    ...currentState,
    priceId
  }

  state.pricesByModelId[modelId] = newState
  return {
    ...state
  }
}

function handleGotError (state, {payload: {error, modelId}}) {
  const currentState = state.pricesByModelId[modelId] || {}

  const newState = {
    ...currentState,
    error
  }

  state.pricesByModelId[modelId] = newState
  return {
    ...state
  }
}

function handlePriceReceived (state, {payload: {modelId, price}}) {
  const {offers, printingServiceComplete} = price
  const currentState = state.pricesByModelId[modelId] || {}

  const newState = {
    ...currentState,
    offers,
    printingServiceComplete,
    error: null
  }

  state.pricesByModelId[modelId] = newState

  return {
    ...state
  }
}

function handlePriceTimeout (state, {payload: {modelId}}) {
  const {offers, printingServiceComplete} = state
  const currentState = state.pricesByModelId[modelId] || {}

  // Remove estimated offers
  const finalOffers = offers ? offers.filter(offer => !offer.priceEstimated) : null

  const finalPrintingServiceComplete = printingServiceComplete
  ? Object.keys(printingServiceComplete).reduce((aggr, provider) => {
    aggr[provider] = true
    return aggr
  }, {})
  : null

  const newState = {
    ...currentState,
    offers: finalOffers,
    printingServiceComplete: finalPrintingServiceComplete,
    error: null
  }

  state.pricesByModelId[modelId] = newState

  return {
    ...state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.PRICE.CLEAR_OFFERS:
      return handleClearOffers(state, action)
    case TYPE.PRICE.SELECT_OFFER:
      return handleSelectOffer(state, action)
    case TYPE.PRICE.REQUESTED:
      return handlePriceRequested(state, action)
    case TYPE.PRICE.RECEIVED:
      return handlePriceReceived(state, action)
    case TYPE.PRICE.TIMEOUT:
      return handlePriceTimeout(state, action)
    case TYPE.PRICE.GOT_ERROR:
      return handleGotError(state, action)
    default:
      return state
  }
}

export default reducer
