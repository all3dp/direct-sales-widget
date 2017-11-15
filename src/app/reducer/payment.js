import {handleActions} from 'redux-actions'

import TYPE from '../action-type'

const initialState = {
  payment: null
}

function handlePaymentCreated (state, {payload}) {
  return {
    ...state,
    payment: payload.payment
  }
}

export default handleActions({
  [TYPE.PAYMENT.CREATED]: handlePaymentCreated
}, initialState)
