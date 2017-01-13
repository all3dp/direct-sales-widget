import {createAction} from 'redux-actions'

import TYPE from '../type'
import { goToAddress } from '../action/navigation'
import * as printingEngine from '../lib/printing-engine'

export const selectVendor = vendorId => dispatch => {
  dispatch(createAction(TYPE.CART.VENDOR_SELECTED)(vendorId))
  dispatch(goToAddress())
}

export const selectShipping = shippingId => {
  return createAction(TYPE.CART.SHIPPING_SELECTED)(shippingId)
}

export const changeQuantity = quantity => {
  return createAction(TYPE.CART.QUANTITY_CHANGED)(quantity)
}

export const createShoppingCart = () => async (dispatch, getState) => {
  const options = {
    userId: getState().user.userId,
    priceId: getState().price.priceId,
    items: [{
      modelId: getState().model.modelId,
      materialId: getState().material.selected,
      vendorId: getState().cart.selectedVendor,
      quantity: getState().cart.quantity
    }],
    shipping: [{
      name: getState().cart.selectedShipping,
      vendorId: getState().cart.selectedVendor
    }]
  }
  const { cartId } = await printingEngine.createShoppingCart(options)
  dispatch(createAction(TYPE.CART.REQUEST_CREATED)(cartId))

  const cart = await printingEngine.getFinalCartPrice({ cartId })
  dispatch(createAction(TYPE.CART.RECEIVED_FINAL_PRICE)(cart))
}
