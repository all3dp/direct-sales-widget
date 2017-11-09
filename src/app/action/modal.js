import {createAction} from 'redux-actions'

import TYPE, {MODAL_TYPE} from '../action-type'

export const open = createAction(
  TYPE.MODAL.OPEN,
  ({contentType, contentProps, isCloseable}) => ({contentType, contentProps, isCloseable})
)

export const close = createAction(TYPE.MODAL.CLOSE)

export const openFatalErrorModal = error =>
  open({
    contentType: MODAL_TYPE.FATAL_ERROR,
    contentProps: {error},
    isCloseable: false
  })
