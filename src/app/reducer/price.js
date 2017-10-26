import {handleActions} from 'redux-actions'

import TYPE from '../type'

const initialState = {
  materialPrice: 0,
  shippingPrice: 0,
  vatPrice: 0
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

export default handleActions({
  [TYPE.PRICE.SET_MATERIAL_PRICE]: handleSetMaterialPrice,
  [TYPE.PRICE.SET_SHIPPING_PRICE]: handleSetShippingPrice,
  [TYPE.PRICE.SET_VAT_PRICE]: handleSetVatPrice,
  [TYPE.PRICE.SET_VAT_PERCENTAGE]: handleSetVatPercentage
}, initialState)
