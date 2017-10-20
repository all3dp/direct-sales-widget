import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetContainer from 'Component/widget-container'
import CheckoutOverlay from 'Component/checkout-overlay'

import {selectSelectedMaterialPrice} from 'Lib/selector'

const DisplayPage = ({
  productTitle,
  productPrice
}) => (
  <WidgetContainer backgroundImage="http://placehold.it/320x280">
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={productPrice}
      shippingPrice={6.50}
      vatPrice={2.58}
      totalPrice={45.08}
    />
  </WidgetContainer>
)

const mapStateToProps = state => ({
  productTitle: state.product.title,
  productPrice: selectSelectedMaterialPrice(state)
})

const mapDispatchToProps = {
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(DisplayPage)
