import {createAction} from 'redux-actions'

import * as stripe from 'Service/stripe'
import * as paypal from 'Service/paypal'
import * as printingEngine from 'Lib/printing-engine'

import TYPE from '../type'

// Private actions
const orderStarted = createAction(
  TYPE.ORDER.STARTED
)
const payed = createAction(
  TYPE.ORDER.PAYED,
  paymentToken => ({paymentToken})
)
const abort = createAction(
  TYPE.ORDER.ABORTED
)
const ordered = createAction(
  TYPE.ORDER.ORDERED,
  orderId => ({orderId})
)

const createOrder = (type, token) => async (dispatch, getState) => {
  const userId = getState().user.userId
  const priceId = getState().price.priceId
  const offerId = getState().price.selectedOffer.offerId

  try {
    const {orderId} = await printingEngine.order({userId, priceId, offerId, type, token})
    dispatch(ordered(orderId))
  } catch (error) {
    // We assume here, that the order sill was successful
    dispatch(ordered(error))
  }
}

// Public actions

export const payWithStripe = () => async (dispatch, getState) => {
  dispatch(orderStarted())
  const offer = getState().price.selectedOffer
  const currency = offer.currency
  const amount = offer.totalPrice
  const email = getState().user.user.emailAddress

  try {
    const tokenObject = await stripe.checkout({amount, currency, email})
    const paymentToken = tokenObject.id
    dispatch(payed(paymentToken))
  } catch (error) {
    dispatch(abort())
    throw error // Reject to inform callee about the result
  }
}

export const payWithPaypal = () => (dispatch, getState) => {
  const amount = getState().price.selectedOffer.totalPrice
  const currency = getState().price.selectedOffer.currency
  const offerId = getState().price.selectedOffer.offerId

  return paypal.createPayment({amount, currency, offerId})
}

export const createOrderWithStripe = () => (dispatch, getState) => {
  const token = getState().order.paymentToken

  return dispatch(createOrder('stripe', token))
}

export const createOrderWithPaypal = (data, actions) => async (dispatch) => {
  const payment = await paypal.executePayment({actions})
  const token = payment.id

  return dispatch(createOrder('paypal', token))
}
