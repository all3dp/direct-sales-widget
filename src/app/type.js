// Action types

export default {
  MODAL: {
    OPEN: 'MODAL.OPEN',
    CLOSE: 'MODAL.CLOSE'
  },
  APP: {
    FOO_ACTION: 'APP.FOO_ACTION'
  },
  MODEL: {
    UPLOAD_FINISHED: 'MODEL.UPLOAD_FINISHED',
    UPLOAD_STARTED: 'MODEL.UPLOAD_STARTED',
    UPLOAD_FAILED: 'MODEL.UPLOAD_FAILED',
    UPLOAD_TO_BACKEND_PROGRESSED: 'MODEL.UPLOAD_TO_BACKEND_PROGRESSED',
    UPLOAD_TO_BACKEND_FAILED: 'MODEL.UPLOAD_TO_BACKEND_FAILED',
    UPLOAD_TO_BACKEND_STARTED: 'MODEL.UPLOAD_TO_BACKEND_STARTED',
    UPLOAD_TO_BACKEND_FINISHED: 'MODEL.UPLOAD_TO_BACKEND_FINISHED'
  },
  MATERIAL: {
    RECEIVED: 'MATERIAL.RECEIVED',
    SELECTED: 'MATERIAL.SELECTED'
  },
  PRICE: {
    REQUEST_CREATED: 'PRICE.REQUEST_CREATED',
    RECEIVED: 'PRICE.RECEIVED',
    ERROR: 'PRICE.ERROR'
  },
  USER: {
    SHIPPING_ADDRESS_CHANGED: 'USER.SHIPPING_ADDRESS_CHANGED',
    SHIPPING_ADDRESS_DETECTION_FAILED: 'USER.SHIPPING_ADDRESS_DETECTION_FAILED',
    CREATED: 'USER.CREATED',
    UPDATED: 'USER.UPDATED'
  },
  CART: {
    VENDOR_SELECTED: 'CART.VENDOR_SELECTED',
    SHIPPING_SELECTED: 'CART.SHIPPING_SELECTED',
    QUANTITY_CHANGED: 'CART.QUANTITY_CHANGED',
    REQUEST_CREATED: 'CART.REQUEST_CREATED',
    RECEIVED_FINAL_PRICE: 'CART.RECEIVED_FINAL_PRICE'
  },
  ORDER: {
    SUCCESS: 'ORDER.SUCCESS'
  }
}
