import {createAction} from 'redux-actions'
import TYPE from '../action-type'

// Sync actions
export const setModels = createAction(
  TYPE.MODEL.SET_MODELS,
  items => items
)

export const selectModel = createAction(
  TYPE.MODEL.SELECT_MODEL,
  modelId => ({modelId})
)

export const selectNextModel = () => (dispatch, getState) => {
  const {models, selectedModelId} = getState().model
  const currentModelIndex = models.findIndex(m => m.modelId === selectedModelId)
  const nextModelIndex = currentModelIndex === models.length - 1 ? 0 : currentModelIndex + 1
  const nextModelId = models[nextModelIndex].modelId

  dispatch(selectModel(nextModelId))
}

export const selectPreviousModel = () => (dispatch, getState) => {
  const {models, selectedModelId} = getState().model
  const currentModelIndex = models.findIndex(m => m.modelId === selectedModelId)
  const previousModelIndex = currentModelIndex === 0 ? models.length - 1 : currentModelIndex - 1
  const previousModelId = models[previousModelIndex].modelId

  dispatch(selectModel(previousModelId))
}
