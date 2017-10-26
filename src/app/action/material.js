import {createAction} from 'redux-actions'
import TYPE from '../type'

import {getMaterialPrice} from './price'

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

export const changeToNextMaterial = () => (dispatch) => {
  dispatch(selectNextMaterial())
  dispatch(getMaterialPrice())
}

export const changeToPreviousMaterial = () => (dispatch) => {
  dispatch(selectPreviousMaterial())
  dispatch(getMaterialPrice())
}
