import {init} from 'Action/init'
import * as userActions from 'Action/user'
import * as productActions from 'Action/product'
import * as priceActions from 'Action/price'
import {AppError} from 'Lib/error'

import {resolveAsyncThunk, rejectAsyncThunk} from '../../../helper'

import {ERROR_TYPE} from '../../../../src/app/type'

describe('Init actions', () => {
  let initialStoreData
  let store
  let sandbox

  beforeEach(() => {
    initialStoreData = {}
    store = mockStore(initialStoreData)

    sandbox = sinon.sandbox.create()
    sandbox.stub(productActions, 'getProduct')
    sandbox.stub(userActions, 'detectAddress')
    sandbox.stub(userActions, 'createUser')
    sandbox.stub(priceActions, 'getMaterialPrice')
    sandbox.stub(priceActions, 'getShippingPrice')
    sandbox.stub(priceActions, 'getVatPrice')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('init()', () => {
    it('dispatches expected actions, when everything succeeds', async () => {
      productActions.getProduct
        .withArgs()
        .returns({type: 'got-some-product'})

      userActions.detectAddress
        .withArgs()
        .returns(resolveAsyncThunk('some-address-deteced'))

      userActions.createUser
        .withArgs()
        .returns(resolveAsyncThunk('some-user-created'))

      priceActions.getMaterialPrice
        .withArgs()
        .returns({type: 'got-some-material-price'})

      priceActions.getShippingPrice
        .withArgs()
        .returns({type: 'got-some-shippng-price'})

      priceActions.getVatPrice
        .withArgs()
        .returns({type: 'got-some-vat-price'})

      await store.dispatch(init())

      expect(store.getActions(), 'to equal', [
        {type: 'got-some-product'},
        {type: 'some-address-deteced'},
        {type: 'some-user-created'},
        {type: 'got-some-material-price'},
        {type: 'got-some-shippng-price'},
        {type: 'got-some-vat-price'}
      ])
    })

    it('does not create a user, when address detection fails', () => {
      productActions.getProduct
        .withArgs()
        .returns({type: 'got-some-product'})

      userActions.detectAddress
        .withArgs()
        .returns(rejectAsyncThunk('some-address-deteced', new AppError(ERROR_TYPE.DETECT_ADDRESS_FAILED)))

      return store.dispatch(init()).catch(() => {
        expect(userActions.createUser, 'was not called')
      })
    })
  })
})
