// @flow

import TYPE from '../action-type'

const initialState = {
  modelId: null,
  title: null,
  description: null,
  quantity: null
}

function handleSetModel (state, {payload: {items}}) {
  return {
    ...state,
    modelId: items[0].modelId,
    quantity: items[0].quantity,
    title: items[0].title,
    description: items[0].description
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.CONFIGURATION.USE_CONFIGURATION:
      return handleSetModel(state, action)
    default:
      return state
  }
}

export default reducer
