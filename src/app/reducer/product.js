import {handleActions} from 'redux-actions'

import TYPE from '../type'

const initialState = {
  title: 'arbitrary-object-title',
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
}

function handleSetProductInformation (state, {payload}) {
  return {
    ...state,
    ...payload
  }
}

export default handleActions({
  [TYPE.PRODUCT.SET_INFORMATION]: handleSetProductInformation
}, initialState)
