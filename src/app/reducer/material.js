import {handleActions} from 'redux-actions'

import TYPE from '../type'

const initialState = {
  materials: undefined,
  materialIds: undefined,
  selectedMaterialId: undefined
}

export const createMaterialsById = (prev, curr) => {
  prev[curr.id] = curr
  return prev
}

export function handleSetMaterials (state, {payload}) {
  const materialIds = payload.materials.map(material => material.id)
  const materials = payload.materials.reduce(createMaterialsById, {})
  return {
    ...state,
    materials,
    materialIds
  }
}

export function handleSelectMaterial (state, {payload}) {
  return {
    ...state,
    selectedMaterialId: payload.materialId
  }
}

export function handleSelectNextMaterial (state) {
  const {materialIds, selectedMaterialId} = state
  const currentMaterialIndex = materialIds.indexOf(selectedMaterialId)
  const nextMaterialIndex = currentMaterialIndex < materialIds.length - 1 ? currentMaterialIndex + 1 : 0
  const nextMaterialId = materialIds[nextMaterialIndex]

  return {
    ...state,
    selectedMaterialId: nextMaterialId
  }
}

export function handleSelectPreviousMaterial (state) {
  const {materialIds, selectedMaterialId} = state
  const currentMaterialIndex = materialIds.indexOf(selectedMaterialId)
  const nextMaterialIndex = currentMaterialIndex > 0 ? currentMaterialIndex - 1 : materialIds.length - 1
  const nextMaterialId = materialIds[nextMaterialIndex]

  return {
    ...state,
    selectedMaterialId: nextMaterialId
  }
}

export default handleActions({
  [TYPE.MATERIAL.SET_MATERIALS]: handleSetMaterials,
  [TYPE.MATERIAL.SELECT_MATERIAL]: handleSelectMaterial,
  [TYPE.MATERIAL.SELECT_NEXT_MATERIAL]: handleSelectNextMaterial,
  [TYPE.MATERIAL.SELECT_PREVIOUS_MATERIAL]: handleSelectPreviousMaterial
}, initialState)
