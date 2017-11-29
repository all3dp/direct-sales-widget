import {handleActions} from 'redux-actions'

import TYPE from '../action-type'

const initialState = {
  initialized: false
}

function handleInitDone (state) {
  return {
    ...state,
    initialized: true
  }
}

export default handleActions({
  [TYPE.INIT.DONE]: handleInitDone
}, initialState)
