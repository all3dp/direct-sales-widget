import {createAction} from 'redux-actions'

import * as printingEngine from 'Lib/printing-engine'

import TYPE from '../action-type'

// Private actions
const ordered = createAction(
  TYPE.ORDER.ORDERED,
  orderId => ({orderId})
)

export const createOrder = () => async (dispatch, getState) => {
  const {
    model: {
      selectedModelId
    },
    user: {
      userId
    },
    price: {
      pricesByModelId
    }
  } = getState()
  const {bestOffer: {offerId}, priceId} = pricesByModelId[selectedModelId]

  try {
    const {orderId} = await printingEngine.order({userId, priceId, offerId})
    dispatch(ordered(orderId))
  } catch (error) {
    dispatch(ordered(error))
  }
}

export const createPaymentWithPaypal = () => async (dispatch, getState) => {
  const state = getState()
  const {order: {orderId}, model: {selectedModelId}} = state
  const {bestOffer: {totalPrice, currency, offerId}} = state.price.pricesByModelId[selectedModelId]

  const transactions = [
    {
      custom: offerId,
      amount: {
        total: totalPrice.toString(),
        currency
      }
    }
  ]

  return await printingEngine.createPaypalPayment({orderId, transactions})
}
