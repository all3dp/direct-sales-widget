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
    const {orderId} = await printingEngine.order({userId, priceId, offerIds: [offerId]})
    dispatch(ordered(orderId))
  } catch (error) {
    dispatch(ordered(error))
  }
}

export const createPaymentWithPaypal = () => async (dispatch, getState) => {
  const state = getState()
  const {order: {orderId}, model: {selectedModelId, models}} = state
  const {bestOffer: {items, totalPrice, currency, offerId, subTotalPrice, vatPrice, shipping: {price: shipping}}} = state.price.pricesByModelId[selectedModelId]

  const transactions = [
    {
      custom: offerId,
      amount: {
        total: totalPrice.toString(),
        currency,
        details: {
          subtotal: String(subTotalPrice),
          tax: String(vatPrice),
          shipping: String(shipping)
        }
      },
      item_list: {
        items: [
          {
            quantity: 1,
            currency,
            name: `${models.find(m => m.modelId === selectedModelId).title}`,
            price: items[0].price
          }
        ]
      }
    }
  ]

  return await printingEngine.createPaypalPayment({orderId, transactions})
}
