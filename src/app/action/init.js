import {detectAddress, createUser} from './user'
import {openFatalErrorModal} from './modal'
import {getProduct} from './product'

export const init = () => dispatch => (
  Promise.all([
    dispatch(getProduct()),
    dispatch(detectAddress())
    .then(() => dispatch(createUser()))
    .catch(error => dispatch(openFatalErrorModal(error)))
  ])
)
