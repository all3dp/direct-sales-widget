import {createAction} from 'redux-actions'

import TYPE from '../action-type'

export const setError = createAction(
  TYPE.ERROR.SET
)

export const clearError = createAction(
  TYPE.ERROR.CLEAR
)
