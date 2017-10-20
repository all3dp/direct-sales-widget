import {createAction} from 'redux-actions'

import {setMaterials, selectMaterial} from 'Action/material'

import productMock from '../../../test-data/mock/object.json'

import TYPE from '../type'

// Private actions

export const setProductInformation = createAction(
  TYPE.PRODUCT.SET_INFORMATION,
  information => ({title: information.title, description: information.description})
)

// Public actions

export const getProduct = () => async (dispatch) => {
  const product = productMock

  dispatch(setProductInformation({
    title: product.title,
    description: product.description
  }))
  dispatch(setMaterials(product.materials))
  dispatch(selectMaterial(product.materials[0].id))
}

