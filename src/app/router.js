import React from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import DisplayPage from 'Container/display-page'
import AddressPage from 'Container/address-page'
import CheckOutPage from 'Container/checkout-page'
import Initializer from 'Container/initializer'

/* eslint-disable react/prop-types */
export default ({store}) => {
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Router history={history}>
      <Route component={Initializer}>
        <Route component={DisplayPage} path="/" />
        <Route component={AddressPage} path="/address" />
        <Route component={CheckOutPage} path="/checkout" />
      </Route>
    </Router>
  )
}
