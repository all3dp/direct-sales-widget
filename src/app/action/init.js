import {createAction} from 'redux-actions'
import {detectAddress, createUser} from './user'
import {getConfiguration} from './configuration'
import {getMaterials} from './material'
import {createPriceRequest} from './price'
import TYPE from '../action-type'

export const initDone = createAction(
  TYPE.INIT.DONE
)

export const init = configurationId => async (dispatch) => {
  await dispatch(getConfiguration(configurationId))
  await dispatch(getMaterials())
  await dispatch(initDone())
  await dispatch(detectAddress())
  await dispatch(createUser())
  await dispatch(createPriceRequest())
  // try {
  //   throw new Error('Whaaaaat')
  // } catch (error) {
  //   throw error
  // }
}
