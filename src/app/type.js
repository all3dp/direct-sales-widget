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
    CLEAR_OFFERS: 'PRICE.CLEAR_OFFERS',
    REQUESTED: 'PRICE.REQUESTED',
    RECEIVED: 'PRICE.RECEIVED',
    CREATE: 'PRICE.CREATE',
    POLLING_FAILED: 'PRICE.POLLING_FAILED'
  },
  USER: {
    SHIPPING_ADDRESS_CHANGED: 'USER.SHIPPING_ADDRESS_CHANGED',
    CREATED: 'USER.CREATED',
    UPDATED: 'USER.UPDATED',
    SET_BILLING_ADDRESS: 'USER.SET_BILLING_ADDRESS'
  },
  CART: {
    OFFER_SELECTED: 'CART.OFFER_SELECTED',
    CREATED: 'CART.CREATED',
    RECEIVED_FINAL_PRICE: 'CART.RECEIVED_FINAL_PRICE'
  },
  ORDER: {
    ORDERED: 'ORDER.ORDERED',
    PAYED: 'ORDER.PAYED',
    STARTED: 'ORDER:STARTED',
    ABORTED: 'ORDER:ABORTED'
  }
}

export const MODAL_TYPE = {
  SHIPPING_ADDRESS: 'MODAL.SHIPPING_ADDRESS',
  FETCHING_PRICE: 'MODAL.FETCHING_PRICE',
  PRICE_CHANGED: 'MODAL.PRICE_CHANGED',
  MATERIAL: 'MODAL.MATERIAL'
}
