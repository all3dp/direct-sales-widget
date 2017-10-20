import {createAction} from 'redux-actions'
import TYPE from '../type'

export const setMaterials = createAction(
  TYPE.MATERIAL.SET_MATERIALS,
  materials => ({materials})
)

export const selectMaterial = createAction(
  TYPE.MATERIAL.SELECT_MATERIAL,
  materialId => ({materialId})
)

export const selectNextMaterial = createAction(
  TYPE.MATERIAL.SELECT_NEXT_MATERIAL
)

export const selectPreviousMaterial = createAction(
  TYPE.MATERIAL.SELECT_PREVIOUS_MATERIAL
)
