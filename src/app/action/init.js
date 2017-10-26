import {detectAddress, createUser} from './user'
import {getProduct} from './product'
import {getMaterialPrice, getShippingPrice, getVatPrice} from './price'

export const init = () => dispatch => (
  Promise.all([
    dispatch(getProduct()),
    dispatch(detectAddress())
      .then(() => {
        dispatch(createUser())
          .then(() => {
            dispatch(getMaterialPrice())
            dispatch(getShippingPrice())
            dispatch(getVatPrice())
          })
      })
  ])
)
