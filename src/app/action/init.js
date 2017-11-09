import {detectAddress, createUser} from './user'
import {getConfiguration} from './configuration'
import {getMaterials} from './material'
import {createPriceRequest} from './price'

export const init = () => async (dispatch) => {
  await dispatch(getConfiguration())
  await dispatch(getMaterials())
  await dispatch(detectAddress())
  await dispatch(createUser())
  await dispatch(createPriceRequest())
}
