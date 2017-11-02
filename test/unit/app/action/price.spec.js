import {
  selectOffer,
  refreshSelectedOffer,
  createPriceRequest,
  createDebouncedPriceRequest
} from 'Action/price'
import * as pollLib from 'Lib/poll'
import * as printingEngine from 'Lib/printing-engine'
import * as modalActions from 'Action/modal'
import {AppError} from 'Lib/error'
import TYPE, {ERROR_TYPE} from '../../../../src/app/type'

describe('Price actions', () => {
  let sandbox
  let initialStoreData
  let store

  beforeEach(() => {
    initialStoreData = {
      material: {
        materials: {
          materialConfigs: {
            material1: 'something',
            material2: 'something'
          }
        }
      },
      model: {
        models: [{
          modelId: 'model1',
          quantity: 1
        }, {
          modelId: 'model2',
          quantity: 2
        }]
      },
      price: {
        priceId: null
      },
      user: {
        userId: 'some-user-id'
      },
      configuration: {
        configurationId: null
      }
    }
    store = mockStore(initialStoreData)

    sandbox = sinon.sandbox.create()
    sandbox.spy(pollLib, 'poll')
    sandbox.spy(pollLib, 'debouncedPoll')
    sandbox.spy(pollLib, 'stopPoll')
    pollLib.resetPollState()

    sandbox.stub(printingEngine)
    printingEngine.createPriceRequest.resolves({priceId: 'some-price-id'})
    printingEngine.getPriceWithStatus.resolves({
      isComplete: true,
      price: {some: 'price'}
    })

    sandbox.stub(modalActions)
  })

  afterEach(() => {
    sandbox.restore()
  })
})
