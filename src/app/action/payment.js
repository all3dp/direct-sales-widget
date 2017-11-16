import {createAction} from 'redux-actions'

import TYPE from '../action-type'

export const paymentCreated = createAction(
  TYPE.PAYMENT.CREATED,
  payment => ({payment})
)
