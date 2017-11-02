import {handleActions} from 'redux-actions'

import TYPE from '../type'

const initialState = {
  materialPrice: null,
  shippingPrice: null,
  vatPrice: null
}

function handleSetMaterialPrice (state, {payload: {materialPrice}}) {
  return {
    ...state,
    materialPrice
  }
}

function handleSetShippingPrice (state, {payload: {shippingPrice}}) {
  return {
    ...state,
    shippingPrice
  }
}

function handleSetVatPrice (state, {payload: {vatPrice}}) {
  return {
    ...state,
    vatPrice
  }
}

function handleSetVatPercentage (state, {payload: {vatPercentage}}) {
  return {
    ...state,
    vatPercentage
  }
}

function handleSetPrices (state, {payload}) {
  return {
    ...state,
    ...payload
  }
}

export default handleActions({
  [TYPE.PRICE.SET_MATERIAL_PRICE]: handleSetMaterialPrice,
  [TYPE.PRICE.SET_SHIPPING_PRICE]: handleSetShippingPrice,
  [TYPE.PRICE.SET_VAT_PRICE]: handleSetVatPrice,
  [TYPE.PRICE.SET_VAT_PERCENTAGE]: handleSetVatPercentage,
  [TYPE.PRICE.SET_PRICES]: handleSetPrices
}, initialState)
