import {
  open,
  close,
  openFatalErrorModal
} from '../../../../src/app/action/modal'
import Store from '../../../../src/app/store'

import {MODAL_TYPE} from '../../../../src/app/type'

describe('Modal Integration Test', () => {
  let store

  beforeEach(() => {
    store = Store({})
  })

  describe('open()', () => {
    it('works with all parameters set', async () => {
      store.dispatch(
        open({
          contentType: 'some-content-type',
          contentProps: 'some-content-props',
          isCloseable: false
        })
      )
      expect(store.getState().modal, 'to equal', {
        isOpen: true,
        isCloseable: false,
        contentType: 'some-content-type',
        contentProps: 'some-content-props'
      })
    })

    it('works with default parameters', async () => {
      store.dispatch(
        open({
          contentType: 'some-content-type'
        })
      )
      expect(store.getState().modal, 'to equal', {
        isOpen: true,
        isCloseable: true,
        contentType: 'some-content-type',
        contentProps: {}
      })
    })
  })

  describe('close()', () => {
    it('works', async () => {
      store.dispatch(close())
      expect(store.getState().modal, 'to equal', {
        isOpen: false,
        isCloseable: true,
        contentType: null,
        contentProps: {}
      })
    })
  })

  describe('openFatalErrorModal()', () => {
    it('opens fatal error modal', () => {
      store.dispatch(openFatalErrorModal())
      expect(store.getState().modal, 'to equal', {
        isOpen: true,
        isCloseable: false,
        contentType: MODAL_TYPE.FATAL_ERROR,
        contentProps: {}
      })
    })
  })
})
