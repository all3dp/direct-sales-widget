import {detectAddress, createUser} from './user'
import {getProduct} from './product'

export const init = () => dispatch => (
  Promise.all([
    dispatch(getProduct()),
    dispatch(detectAddress())
      .then(() => dispatch(createUser()))
  ])
)
