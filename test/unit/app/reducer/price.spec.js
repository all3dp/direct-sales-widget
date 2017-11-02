import reducer from 'Reducer/price'

describe('Price reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}), 'to equal', {
      materialPrice: null,
      shippingPrice: null,
      vatPrice: null
    })
  })
})
