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
import modal from './modal'
import model from './model'
import payment from './payment'

const rootReducer = combineReducers({
  app,
  user,
  material,
  price,
  order,
  modal,
  configuration,
  display,
  routing: routerReducer,
  form: formReducer,
  model,
  payment
})

export default rootReducer
