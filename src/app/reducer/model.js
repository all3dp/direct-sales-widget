// @flow

import TYPE from '../action-type'

const initialState = {
  selectedModelId: null,
  models: []
}

function handleSetModels (state, {payload: {items}}) {
  return {
    ...state,
    models: items,
    selectedModelId: items[0].modelId
  }
}

function handleSelectModel (state, {payload: {modelId}}) {
  return {
    ...state,
    selectedModelId: modelId
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.CONFIGURATION.USE_CONFIGURATION:
      return handleSetModels(state, action)
    case TYPE.MODEL.SELECT_MODEL:
      return handleSelectModel(state, action)
    default:
      return state
  }
}

export default reducer
