import {
  getProduct,
  setProductInformation
} from 'Action/product'
import product from '../../../../test-data/mock/object'
import Store from '../../../../src/app/store'

describe('Product Integration Test', () => {
  let store
  const data = product

  beforeEach(() => {
    store = Store({})
  })

  describe('getProduct()', () => {
    it('works', () => {
      store.dispatch(getProduct())

      expect(store.getState().product, 'to equal', {
        title: data.title,
        description: data.description
      })
    })
  })

  describe('setProductInformation()', () => {
    it('works', () => {
      store.dispatch(setProductInformation(data))

      expect(store.getState().product, 'to equal', {
        title: data.title,
        description: data.description
      })
    })
  })
})
