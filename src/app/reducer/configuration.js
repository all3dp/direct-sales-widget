import {handleActions} from 'redux-actions'

import TYPE from '../action-type'

const initialState = {
  configurationId: null,
  isDirectSales: false
}

function handleConfigurationUsed (state, {payload}) {
  return {
    ...state,
    configurationId: payload._id, // eslint-disable-line no-underscore-dangle
    isDirectSales: Boolean(payload.materialConfigId)
  }
}

export default handleActions({
  [TYPE.CONFIGURATION.USE_CONFIGURATION]: handleConfigurationUsed
}, initialState)
