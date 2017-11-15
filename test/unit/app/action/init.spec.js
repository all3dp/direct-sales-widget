import {init} from 'Action/init'
import * as userActions from 'Action/user'
import * as priceActions from 'Action/price'
import * as configurationActions from 'Action/configuration'
import * as materialActions from 'Action/material'
import * as navigationActions from 'Action/navigation'
import {AppError} from 'Lib/error'

import {resolveAsyncThunk, rejectAsyncThunk} from '../../../helper'

import {ERROR_TYPE} from '../../../../src/app/action-type'

describe('Init actions', () => {
  let initialStoreData
  let store
  let sandbox

  beforeEach(() => {
    initialStoreData = {}
    store = mockStore(initialStoreData)

    sandbox = sinon.sandbox.create()
    sandbox.stub(configurationActions, 'getConfiguration')
    sandbox.stub(materialActions, 'getMaterials')
    sandbox.stub(userActions, 'detectAddress')
    sandbox.stub(userActions, 'createUser')
    sandbox.stub(priceActions, 'createPriceRequest')
    sandbox.stub(navigationActions, 'goToAddress')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('init()', () => {
    it('dispatches expected actions, when everything succeeds', async () => {
      configurationActions.getConfiguration
        .withArgs()
        .returns(resolveAsyncThunk('got-some-configuration'))

      materialActions.getMaterials
        .withArgs()
        .returns(resolveAsyncThunk('got-some-materials'))

      userActions.detectAddress
        .withArgs()
        .returns(resolveAsyncThunk('some-address-deteced'))

      userActions.createUser
        .withArgs()
        .returns(resolveAsyncThunk('some-user-created'))

      priceActions.createPriceRequest
        .withArgs()
        .returns(resolveAsyncThunk('some-prices-requested'))

      await store.dispatch(init())

      expect(store.getActions(), 'to equal', [
        {type: 'got-some-configuration'},
        {type: 'got-some-materials'},
        {type: 'some-address-deteced'},
        {type: 'some-user-created'},
        {type: 'some-prices-requested'}
      ])
    })

    it('does not create a user, when address detection fails', () => {
      userActions.detectAddress
        .withArgs()
        .returns(rejectAsyncThunk('some-address-deteced', new AppError(ERROR_TYPE.DETECT_ADDRESS_FAILED)))

      return store.dispatch(init()).catch(() => {
        expect(userActions.createUser, 'was not called')
      })
    })
  })
})
