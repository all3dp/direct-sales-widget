import {detectAddress, createUser} from './user'
import {getConfiguration} from './configuration'
import {getMaterials} from './material'
import {createPriceRequest} from './price'
import {goToAddress} from './navigation'

export const init = () => async (dispatch) => {
  await dispatch(getConfiguration())
  await dispatch(getMaterials())
  try {
    await dispatch(detectAddress())
    await dispatch(createUser())
    await dispatch(createPriceRequest())
  } catch (error) {
    dispatch(goToAddress())
  }
}
