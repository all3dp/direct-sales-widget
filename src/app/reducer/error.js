import {handleActions} from 'redux-actions'

import TYPE from '../action-type'

const initialState = {
  error: null
}

function handleSetError (state, {payload}) {
  return {
    ...state,
    message: payload.error.message
  }
}

function clearError (state) {
  return {
    ...state,
    message: null
  }
}

export default handleActions({
  [TYPE.ERROR.SET]: handleSetError,
  [TYPE.ERROR.CLEAR]: clearError
}, initialState)
