import * as printingEngine from 'Lib/printing-engine'
import {createAction} from 'redux-actions'

import {createPriceRequest} from './price'
import configurationMock from '../../../test-data/mock/object.json'

import TYPE from '../action-type'

const useConfiguration = createAction(
  TYPE.CONFIGURATION.USE_CONFIGURATION,
  configuration => configuration
)

export const getConfiguration = configurationId => async (
  dispatch,
  getState
) => {
  // const configuration = await printingEngine.getConfiguration(configurationId)
  const configuration = configurationMock
  dispatch(useConfiguration(configuration))
  if (getState().user.userId) {
    dispatch(createPriceRequest())
  }
}
