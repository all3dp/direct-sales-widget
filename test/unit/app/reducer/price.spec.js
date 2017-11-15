import reducer from 'Reducer/price'
import TYPE from '../../../../src/app/action-type'

describe('Price reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}), 'to equal', {
      pricesByModelId: {}
    })
  })

  describe('handles TYPE.PRICE.CLEAR_OFFERS:', () => {
    let stateBefore
    let action

    beforeEach(() => {
      stateBefore = {
        pricesByModelId: {}
      }

      action = {
        type: TYPE.PRICE.CLEAR_OFFERS,
        payload: {modelId: 'some-model-id'}
      }
    })

    it('clears expected properties', () => {
      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            priceId: null,
            offers: null,
            printingServiceComplete: null,
            selectedOffer: null,
            error: null
          }
        }
      })
    })
  })

  describe('handles TYPE.PRICE.SELECT_OFFER:', () => {
    let stateBefore
    let action

    beforeEach(() => {
      stateBefore = {
        pricesByModelId: {}
      }

      action = {
        type: TYPE.PRICE.SELECT_OFFER,
        payload: {
          offer: {some: 'offer'},
          modelId: 'some-model-id'
        }
      }
    })

    it('sets selectedOffer', () => {
      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            selectedOffer: {some: 'offer'}
          }
        }
      })
    })

    it('clones the offer before putting it in state', () => {
      expect(reducer(stateBefore, action).selectedOffer, 'not to be', action.payload.offer)
    })
  })

  describe('handles TYPE.PRICE.REQUESTED:', () => {
    let stateBefore
    let action

    beforeEach(() => {
      stateBefore = {
        pricesByModelId: {}
      }

      action = {
        type: TYPE.PRICE.REQUESTED,
        payload: {
          priceId: 'some-price-id',
          modelId: 'some-model-id'
        }
      }
    })

    it('sets priceId', () => {
      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            priceId: 'some-price-id'
          }
        }
      })
    })
  })

  describe('handles TYPE.PRICE.RECEIVED:', () => {
    let stateBefore
    let action

    beforeEach(() => {
      stateBefore = {
        pricesByModelId: {}
      }

      action = {
        type: TYPE.PRICE.RECEIVED,
        payload: {
          price: {
            offers: ['some', 'offers'],
            printingServiceComplete: {some: 'printing-services'}
          },
          modelId: 'some-model-id'
        }
      }
    })

    it('sets expected properties', () => {
      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            offers: ['some', 'offers'],
            printingServiceComplete: {some: 'printing-services'},
            error: null
          }
        }
      })
    })

    // it('sets error and resets other state', () => {
    //   const error = new Error()
    //   action.payload = error
    //   action.error = true

    //   console.log(action)

    //   expect(reducer(stateBefore, action), 'to equal', {
    //     pricesByModelId: {
    //       'some-model-id': {
    //         priceId: null,
    //         offers: null,
    //         printingServiceComplete: null,
    //         selectedOffer: null,
    //         error
    //       }
    //     }
    //   })
    // })
  })

  describe('handles TYPE.PRICE.TIMEOUT:', () => {
    let stateBefore
    let action

    beforeEach(() => {
      stateBefore = {
        pricesByModelId: {
          'some-model-id': {
            offers: [{some: 'offer-1'}, {some: 'offer-2', priceEstimated: true}],
            printingServiceComplete: {imateralize: false, shapeways: true}
          }
        }
      }

      action = {
        type: TYPE.PRICE.TIMEOUT,
        payload: {
          modelId: 'some-model-id'
        }
      }
    })

    it('sets expected properties', () => {
      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            offers: [{some: 'offer-1'}],
            printingServiceComplete: {imateralize: true, shapeways: true},
            error: null
          }
        }
      })
    })

    it('sets expected properties when offers and printingServiceComplete are null', () => {
      stateBefore.pricesByModelId[action.payload.modelId].offers = null
      stateBefore.pricesByModelId[action.payload.modelId].printingServiceComplete = null

      expect(reducer(stateBefore, action), 'to equal', {
        pricesByModelId: {
          'some-model-id': {
            offers: null,
            printingServiceComplete: null,
            error: null
          }
        }
      })
    })
  })
})
