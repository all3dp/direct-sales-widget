// Action types

export default {
  MODAL: {
    OPEN: 'MODAL.OPEN',
    CLOSE: 'MODAL.CLOSE'
  },
  MODEL: {
    UPLOAD_FILES: 'MODEL.UPLOAD_FILES',
    UPLOAD_FILE: 'MODEL.UPLOAD_FILE',
    CHECK_STATUS_STARTED: 'MODEL.CHECK_STATUS_STARTED',
    CHECK_STATUS_FINISHED: 'MODEL.CHECK_STATUS_FINISHED',
    UPLOAD_FAILED: 'MODEL.UPLOAD_FAILED',
    UPLOAD_TO_BACKEND_PROGRESSED: 'MODEL.UPLOAD_TO_BACKEND_PROGRESSED',
    UPLOAD_TO_BACKEND_STARTED: 'MODEL.UPLOAD_TO_BACKEND_STARTED',
    UPLOAD_TO_BACKEND_FINISHED: 'MODEL.UPLOAD_TO_BACKEND_FINISHED',
    QUANTITIY_CHANGED: 'MODEL.QUANTITIY_CHANGED',
    INDIVIDUAL_QUANTITIY_CHANGED: 'MODEL.INDIVIDUAL_QUANTITIY_CHANGED',
    UNIT_CHANGED: 'MODEL.UNIT_CHANGED'
  },
  MATERIAL: {
    RECEIVED: 'MATERIAL.RECEIVED',
    SELECTED: 'MATERIAL.SELECTED',
    CONFIG_SELECTED: 'MATERIAL.CONFIG_SELECTED',
    CONFIG_FOR_FINISH_GROUP_SELECTED: 'MATERIAL.CONFIG_FOR_FINISH_GROUP_SELECTED'
  },
  PRICE: {
    REQUESTED: 'PRICE.REQUESTED',
    RECEIVED: 'PRICE.RECEIVED',
    CREATE: 'PRICE.CREATE'
  },
  USER: {
    SHIPPING_ADDRESS_CHANGED: 'USER.SHIPPING_ADDRESS_CHANGED',
    CREATED: 'USER.CREATED',
    UPDATED: 'USER.UPDATED'
  },
  CART: {
    OFFER_SELECTED: 'CART.OFFER_SELECTED',
    CREATED: 'CART.CREATED',
    RECEIVED_FINAL_PRICE: 'CART.RECEIVED_FINAL_PRICE'
  },
  ORDER: {
    ORDERED: 'ORDER.ORDERED'
  }
}

export const MODAL_TYPE = {
  SHIPPING_ADDRESS: 'MODAL.SHIPPING_ADDRESS',
  MATERIAL: 'MODAL.MATERIAL'
}
