import {detectAddress, createUser} from './user'
import {openFatalErrorModal} from './modal'
import {getProduct} from './product'

export const init = () => dispatch => (
  Promise.all([
    dispatch(getProduct())
      .catch(error => dispatch(openFatalErrorModal(error))),
    dispatch(detectAddress())
      .then(() => dispatch(createUser()))
      .catch(error => dispatch(openFatalErrorModal(error)))
  ])
)
