import reducer from 'Reducer/price'

describe('Price reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}), 'to equal', {
      materialPrice: 0,
      shippingPrice: 0,
      vatPrice: 0
    })
  })
})
