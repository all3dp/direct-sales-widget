// @flow

import cloneDeep from 'lodash/cloneDeep'
import {createAction} from 'redux-actions'

import * as printingEngine from 'Lib/printing-engine'
import {generateMaterialIds} from 'Lib/material'

import TYPE from '../action-type'

// Sync actions
export const selectMaterial = createAction(
  TYPE.MATERIAL.SELECTED,
  materialId => materialId
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
  const materials = cloneDeep(await printingEngine.listMaterials())
  generateMaterialIds(materials)

  return dispatch(materialReceived(materials))
}
