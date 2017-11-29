// @flow

import TYPE from '../action-type'

const initialState = {
  materials: undefined,
  selectedMaterial: undefined,
  selectedMaterialConfig: undefined,
  selectedMaterialConfigs: {},
  materialOptions: [],
  selectedMaterialOptionIndex: 0
}

function handleUseConfiguration (state, {payload: {items}}) {
  return {
    ...state,
    materialOptions: items[0].materialOptions,
    selectedMaterialOptionIndex: 0
  }
}

function handleSelectNextMaterialOption (state) {
  const currentIndex = state.selectedMaterialOptionIndex
  const materialOptionsLength = state.materialOptions.length

  return {
    ...state,
    selectedMaterialOptionIndex: currentIndex === materialOptionsLength - 1 ? 0 : currentIndex + 1
  }
}

function handleSelectPreviousMaterialOption (state) {
  const currentIndex = state.selectedMaterialOptionIndex
  const materialOptionsLength = state.materialOptions.length

  return {
    ...state,
    selectedMaterialOptionIndex: currentIndex === 0 ? materialOptionsLength - 1 : currentIndex - 1
  }
}

function handleReceivedMaterials (state, {payload}) {
  return {
    ...state,
    materials: payload
  }
}

function handleSelectedMaterial (state, {payload}) {
  return {
    ...state,
    selectedMaterial: payload
  }
}

function handleSelectedMaterialConfig (state, {payload}) {
  return {
    ...state,
    selectedMaterialConfig: payload
  }
}

function handleSelectedMaterialConfigForFinishGroup (state, {payload}) {
  return {
    ...state,
    selectedMaterialConfigs: {
      ...state.selectedMaterialConfigs,
      ...payload
    },
    selectedMaterialConfig: undefined
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.MATERIAL.RECEIVED:
      return handleReceivedMaterials(state, action)
    case TYPE.MATERIAL.SELECTED:
      return handleSelectedMaterial(state, action)
    case TYPE.MATERIAL.CONFIG_SELECTED:
      return handleSelectedMaterialConfig(state, action)
    case TYPE.MATERIAL.CONFIG_FOR_FINISH_GROUP_SELECTED:
      return handleSelectedMaterialConfigForFinishGroup(state, action)
    case TYPE.CONFIGURATION.USE_CONFIGURATION:
      return handleUseConfiguration(state, action)
    case TYPE.MATERIAL.SELECT_NEXT_MATERIAL_OPTION:
      return handleSelectNextMaterialOption(state)
    case TYPE.MATERIAL.SELECT_PREVIOUS_MATERIAL_OPTION:
      return handleSelectPreviousMaterialOption(state)
    default:
      return state
  }
}

export default reducer
