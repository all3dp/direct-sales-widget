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
import product from './product'
import modal from './modal'

const rootReducer = combineReducers({
  app,
  user,
  material,
  price,
  order,
  modal,
  configuration,
  display,
  product,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
