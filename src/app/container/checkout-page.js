import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Component/widget-layout'
import CheckoutOverlay from 'Component/checkout-overlay'

import {selectSelectedMaterialPrice} from 'Lib/selector'

import Modal from './modal'

const DisplayPage = ({
  productTitle,
  productPrice
}) => (
  <WidgetLayout backgroundImage="http://placehold.it/320x280">
    <Modal />
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={productPrice}
      shippingPrice={6.50}
      vatPrice={2.58}
      totalPrice={45.08}
      handleCheckoutClick={() => null}
      handleCheckoutAuthorize={() => null}
    />
  </WidgetLayout>
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
