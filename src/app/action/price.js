import {createAction} from 'redux-actions'

import {getVatPercentage, getVat} from 'Lib/vat'

import TYPE from '../type'
import shipping from '../data/index'

// Private actions

export const setShippingPrice = createAction(
  TYPE.PRICE.SET_SHIPPING_PRICE,
  shippingPrice => ({shippingPrice})
)

export const setVatPrice = createAction(
  TYPE.PRICE.SET_VAT_PRICE,
  vatPrice => ({vatPrice})
)

export const setVatPercentage = createAction(
  TYPE.PRICE.SET_VAT_PERCENTAGE,
  vatPercentage => ({vatPercentage})
)

// Public actions

export const setMaterialPrice = createAction(
  TYPE.PRICE.SET_MATERIAL_PRICE,
  materialPrice => ({materialPrice})
)

export const getMaterialPrice = () => (dispatch, getState) => {
  const {material: {selectedMaterialId, materials}} = getState()
  const selectedMaterialPrice = materials[selectedMaterialId].price
  dispatch(setMaterialPrice(selectedMaterialPrice))
}

export const getShippingPrice = () => (dispatch, getState) => {
  const {user: {user}, material: {selectedMaterialId, materials}} = getState()
  const selectedMaterial = materials[selectedMaterialId]
  const provider = selectedMaterial.provider.toLowerCase()
  const countryCode = user.shippingAddress.countryCode
  const shippingPrice = shipping[countryCode][provider].methods[0].price

  dispatch(setShippingPrice(shippingPrice))
}

export const getVatPrice = () => (dispatch, getState) => {
  const {user: {user}, price: {materialPrice, shippingPrice}} = getState()
  const vatPercentage = getVatPercentage({user})

  dispatch(setVatPercentage(vatPercentage))
  dispatch(setVatPrice(getVat(materialPrice, shippingPrice, vatPercentage)))
}
