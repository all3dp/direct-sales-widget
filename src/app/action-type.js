export default {
  DISPLAY: {
    TOGGLE_BACKGROUND_IMAGE_ZOOM: 'DISPLAY.TOGGLE_BACKGROUND_IMAGE_ZOOM',
    TOGGLE_DESCRIPTION: 'DISPLAY.TOGGLE_DESCRIPTION'
  },
  PRODUCT: {
    GET_INFORMATION: 'PRODUCT.GET_INFORMATION',
    SET_INFORMATION: 'PRODUCT.SET_INFORMATION'
  },
  MODAL: {
    OPEN: 'MODAL.OPEN',
    CLOSE: 'MODAL.CLOSE'
  },
  MODEL: {
    SET_MODEL: 'MODEL.SET_MODEL'
  },
  MATERIAL: {
    RECEIVED: 'MATERIAL.RECEIVED',
    SELECTED: 'MATERIAL.SELECTED',
    CONFIG_SELECTED: 'MATERIAL.CONFIG_SELECTED',
    CONFIG_FOR_FINISH_GROUP_SELECTED: 'MATERIAL.CONFIG_FOR_FINISH_GROUP_SELECTED',
    SELECT_NEXT_MATERIAL_OPTION: 'MATERIAL.SELECT_NEXT_MATERIAL_OPTION',
    SELECT_PREVIOUS_MATERIAL_OPTION: 'MATERIAL.SELECT_PREVIOUS_MATERIAL_OPTION'
  },
  PRICE: {
    SET_BEST_OFFER: 'TYPE.PRICE.SET_BEST_OFFER',
    SELECT_OFFER: 'PRICE.SELECT_OFFER',
    CLEAR_OFFERS: 'PRICE.CLEAR_OFFERS',
    REQUESTED: 'PRICE.REQUESTED',
    RECEIVED: 'PRICE.RECEIVED',
    TIMEOUT: 'PRICE.TIMEOUT',
    GOT_ERROR: 'PRICE.GOT_ERROR'
  },
  USER: {
    SHIPPING_ADDRESS_CHANGED: 'USER.SHIPPING_ADDRESS_CHANGED',
    CREATED: 'USER.CREATED',
    UPDATED: 'USER.UPDATED',
    SET_BILLING_ADDRESS: 'USER.SET_BILLING_ADDRESS'
  },
  ORDER: {
    ORDERED: 'ORDER.ORDERED',
    PAYED: 'ORDER.PAYED',
    STARTED: 'ORDER:STARTED',
    ABORTED: 'ORDER:ABORTED'
  },
  CONFIGURATION: {
    USE_CONFIGURATION: 'CONFIGURATION.USE_CONFIGURATION'
  },
  PAYMENT: {
    CREATED: 'PAYMENT.CREATED'
  },
  INIT: {
    DONE: 'INIT.DONE'
  },
  ERROR: {
    SET: 'ERROR.SET',
    CLEAR: 'ERROR.CLEAR'
  }
}

export const MODAL_TYPE = {
  FATAL_ERROR: 'MODAL.FATAL_ERROR'
}

export const ERROR_TYPE = {
  POLL_TIMEOUT: 'POLL_TIMEOUT',
  POLL_STOPPED: 'POLL_STOPPED',
  POLL_OVERWRITTEN: 'POLL_OVERWRITTEN',
  FILE_UPLOAD_FAILED: 'FILE_UPLOAD_FAILED'
}
