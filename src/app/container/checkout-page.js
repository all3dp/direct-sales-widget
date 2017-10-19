import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetContainer from 'Component/widget-container'
import CheckoutOverlay from 'Component/checkout-overlay'

const DisplayPage = () => (
  <WidgetContainer backgroundImage="http://placehold.it/320x280">
    <CheckoutOverlay
      objectTitle="Raspberry Pi Case"
      objectPrice={13.50}
      shippingPrice={6.50}
      vatPrice={2.58}
      totalPrice={45.08}
    />
  </WidgetContainer>
  )
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(DisplayPage)
