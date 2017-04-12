import {createAction} from 'redux-actions'
import uniqueId from 'lodash/uniqueId'

import pollApi from '../lib/poll-api'
import * as printingEngine from '../lib/printing-engine'
import {
  createPriceRequest,
  createDebouncedPriceRequest
} from './price'

import TYPE from '../type'

export const changeQuantity = ({quantity}) => async (dispatch) => {
  dispatch(createAction(TYPE.MODEL.QUANTITIY_CHANGED)({quantity}))
  // Update prices
  await dispatch(createDebouncedPriceRequest())
}

export const changeIndividualQuantity = ({quantity, modelId}) => async (dispatch) => {
  dispatch(createAction(TYPE.MODEL.INDIVIDUAL_QUANTITIY_CHANGED)({quantity, modelId}))
  // Update prices
  await dispatch(createDebouncedPriceRequest())
}

export const changeUnit = ({unit}) =>
  createAction(TYPE.MODEL.UNIT_CHANGED)({unit})

export const checkUploadStatus = ({modelId}) => async (dispatch) => {
  dispatch(createAction(TYPE.MODEL.CHECK_STATUS_STARTED)({modelId}))

  try {
    await pollApi(() => printingEngine.getUploadStatus({modelId}))
    dispatch(createAction(TYPE.MODEL.CHECK_STATUS_FINISHED)({modelId}))
  } catch (e) {
    dispatch(createAction(TYPE.MODEL.CHECK_STATUS_FINISHED)({modelId, error: true}))
  }
}

export const uploadFile = file => async (dispatch, getState) => {
  const fileId = uniqueId('file-id-')
  const unit = getState().model.selectedUnit

  dispatch(createAction(TYPE.PRICE.CLEAR_OFFERS)())
  dispatch(createAction(TYPE.MATERIAL.CONFIG_SELECTED)())  // Resets current selection
  dispatch(createAction(TYPE.MODEL.UPLOAD_TO_BACKEND_STARTED)({
    fileId,
    name: file.name,
    size: file.size
  }))

  const onUploadProgressed = progress =>
    dispatch(createAction(TYPE.MODEL.UPLOAD_TO_BACKEND_PROGRESSED)({progress, fileId}))

  try {
    const {modelId, thumbnailUrl} =
      await printingEngine.uploadModel(file, {unit}, onUploadProgressed)
    dispatch(createAction(TYPE.MODEL.UPLOAD_TO_BACKEND_FINISHED)({modelId, fileId, thumbnailUrl}))

    await dispatch(checkUploadStatus({modelId}))
  } catch (e) {
    dispatch(createAction(TYPE.MODEL.UPLOAD_TO_BACKEND_FINISHED)({fileId, error: true}))
    throw new Error('Upload failed')  // Prevent to create a price request if upload failed
  }
}

export const uploadFiles = files => async (dispatch) => {
  await Promise.all(
    files.map(file => dispatch(uploadFile(file)))
  )
  await dispatch(createPriceRequest())
}
