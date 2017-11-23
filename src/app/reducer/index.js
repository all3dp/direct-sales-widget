import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import app from './app'
import user from './user'
import material from './material'
import price from './price'
import order from './order'
import configuration from './configuration'
import display from './display'
import model from './model'
import payment from './payment'
import init from './init'
import error from './error'

const rootReducer = combineReducers({
  app,
  user,
  material,
  price,
  order,
  configuration,
  display,
  routing: routerReducer,
  form: formReducer,
  model,
  payment,
  init,
  error
})

export default rootReducer
