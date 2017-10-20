import {detectAddress, createUser} from './user'
import {openAddressModal} from './modal'
import {getProduct} from './product'

export const init = () => dispatch => (
  Promise.all([
    dispatch(getProduct()),
    dispatch(detectAddress())
      .then(() => dispatch(createUser()))
      .catch(() => dispatch(openAddressModal()))
  ])
)
