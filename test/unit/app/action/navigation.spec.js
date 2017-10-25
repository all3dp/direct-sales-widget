import {routerActions} from 'react-router-redux'

import {
  goToAddress,
  goToCheckout,
  goToHome
} from 'Action/navigation'
import * as userActions from 'Action/user'

describe('Navigation actions', () => {
  let sandbox
  let store

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    sandbox.stub(routerActions, 'push')
    sandbox.stub(userActions)
    store = mockStore({
      configuration: {}
    })
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('goToCheckout()', () => {
    it('calls router push with expected route', () => {
      routerActions.push
        .withArgs('/checkout')
        .returns({type: 'push'})

      store.dispatch(goToCheckout())
      expect(store.getActions(), 'to equal', [
        {type: 'push'}
      ])
    })
  })

  describe('goToAddress()', () => {
    it('calls router push with expected route', () => {
      routerActions.push
        .withArgs('/address')
        .returns({type: 'push'})

      store.dispatch(goToAddress())
      expect(store.getActions(), 'to equal', [
        {type: 'push'}
      ])
    })
  })

  describe('goToHome()', () => {
    it('calls router push with expected route', () => {
      routerActions.push
        .withArgs('/')
        .returns({type: 'push'})

      store.dispatch(goToHome())
      expect(store.getActions(), 'to equal', [
        {type: 'push'}
      ])
    })
  })
})
