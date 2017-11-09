import React from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import isEmpty from 'lodash/isEmpty'
import DisplayPage from 'Container/display-page'
import AddressPage from 'Container/address-page'
import CheckOutPage from 'Container/checkout-page'

const preventDeepLinking = store => (nextState, replace) => {
  const state = store.getState()
  // It is only possible to reach other routes than the model page
  // if an offer has been selected
  if (
    isEmpty(state.price.pricesByModelId) ||
    !state.price.pricesByModelId[state.model.selectedModelId] ||
    !state.price.pricesByModelId[state.model.selectedModelId].bestOffer
  ) {
    replace('/')
  }
}

/* eslint-disable react/prop-types */
export default ({store}) => {
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Router history={history}>
      <Route component={DisplayPage} path="/" />
      <Route component={AddressPage} path="/address" />
      <Route component={CheckOutPage} path="/checkout" onEnter={preventDeepLinking(store)} />
    </Router>
  )
}
