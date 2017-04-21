import {handleActions} from 'redux-actions'

import TYPE from '../type'

const initialState = {
  orderId: null,
  paymentToken: null,
  orderInProgress: false
}

function handleOrderOrdered (state, {payload: {orderId}}) {
  return {
    ...state,
    orderId,
    orderInProgress: false
  }
}

function handleOrderPayed (state, {payload: {paymentToken}}) {
  return {
    ...state,
    paymentToken
  }
}

function handleOrderStarted (state) {
  return {
    ...state,
    orderInProgress: true
  }
}

function handleOrderAborted (state) {
  return {
    ...state,
    orderInProgress: false
  }
}

export default handleActions({
  [TYPE.ORDER.ORDERED]: handleOrderOrdered,
  [TYPE.ORDER.PAYED]: handleOrderPayed,
  [TYPE.ORDER.STARTED]: handleOrderStarted,
  [TYPE.ORDER.ABORTED]: handleOrderAborted
}, initialState)
