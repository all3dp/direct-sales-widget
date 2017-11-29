import {createAction} from 'redux-actions'

import * as printingEngine from 'Lib/printing-engine'
import {selectBestOfferForSelectedMaterialOption, selectMaterialByMaterialConfigId} from 'Lib/selector'

import TYPE from '../action-type'

// Private actions
const ordered = createAction(
  TYPE.ORDER.ORDERED,
  orderId => ({orderId})
)

export const createOrder = () => async (dispatch, getState) => {
  const state = getState()
  const {
    user: {
      userId
    },
    price: {
      priceId
    }
  } = state
  const {offerId} = selectBestOfferForSelectedMaterialOption(state)

  try {
    const {orderId} = await printingEngine.order({userId, priceId, offerIds: [offerId]})
    dispatch(ordered(orderId))
  } catch (error) {
    dispatch(ordered(error))
  }
}

export const createPaymentWithPaypal = () => async (dispatch, getState) => {
  const state = getState()
  const {order: {orderId}, model: {title}} = state
  const {
    items,
    totalPrice,
    currency,
    offerId,
    subTotalPrice,
    vatPrice,
    shipping: {price: shipping}
  } = selectBestOfferForSelectedMaterialOption(state)
  const material = selectMaterialByMaterialConfigId(state)

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
            name: `${title} ${material.materialConfig.name}`,
            price: items[0].price
          }
        ]
      }
    }
  ]

  return await printingEngine.createPaypalPayment({orderId, transactions})
}
