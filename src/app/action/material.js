// @flow

import {createAction} from 'redux-actions'

import * as printingEngine from 'Lib/printing-engine'

import TYPE from '../action-type'

// Sync actions
export const selectMaterial = createAction(
  TYPE.MATERIAL.SELECTED,
  materialId => materialId
)

export const selectNextMaterialOption = createAction(
  TYPE.MATERIAL.SELECT_NEXT_MATERIAL_OPTION
)

export const selectPreviousMaterialOption = createAction(
  TYPE.MATERIAL.SELECT_PREVIOUS_MATERIAL_OPTION
)

export const selectMaterialConfigForFinishGroup = createAction(
  TYPE.MATERIAL.CONFIG_FOR_FINISH_GROUP_SELECTED,
  ({
    materialConfigId,
    finishGroupId
  }) => ({
    [finishGroupId]: materialConfigId
  })
)

export const selectMaterialConfig = createAction(
  TYPE.MATERIAL.CONFIG_SELECTED,
  materialConfigId => materialConfigId
)

const materialReceived = createAction(TYPE.MATERIAL.RECEIVED, materials => materials)

// Async actions
export const getMaterials = () => async (dispatch) => {
  const materialResponse = await printingEngine.listMaterials()
  return dispatch(materialReceived(materialResponse.materialStructure))
}
