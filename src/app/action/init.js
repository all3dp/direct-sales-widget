import {createAction} from 'redux-actions'
import {detectAddress, createUser} from './user'
import {getConfiguration} from './configuration'
import {getMaterials} from './material'
import {createPriceRequest} from './price'
import {goToAddress} from './navigation'
import TYPE from '../action-type'

const initDone = createAction(
  TYPE.INIT.DONE
)

export const init = configurationId => async (dispatch) => {
  try {
    await dispatch(getConfiguration(configurationId))
    await dispatch(getMaterials())
    await dispatch(initDone())
    await dispatch(detectAddress())
    await dispatch(createUser())
    await dispatch(createPriceRequest())
  } catch (error) {
    console.log(error)
    // dispatch(goToAddress())
  }
}
