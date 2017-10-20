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

export const moveIndexUp = (i, a) => {
  const newIndex = i === a.length - 1 ? 0 : i + 1

  return newIndex
}

export const moveIndexDown = (i, a) => {
  const newIndex = i === 0 ? a.length - 1 : i - 1

  return newIndex
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
  const nextMaterialIndex = moveIndexUp(currentMaterialIndex, materialIds)
  const nextMaterialId = materialIds[nextMaterialIndex]

  return {
    ...state,
    selectedMaterialId: nextMaterialId
  }
}

export function handleSelectPreviousMaterial (state) {
  const {materialIds, selectedMaterialId} = state
  const currentMaterialIndex = materialIds.indexOf(selectedMaterialId)
  const nextMaterialIndex = moveIndexDown(currentMaterialIndex, materialIds)
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
