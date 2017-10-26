import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import CheckoutOverlay from 'Component/checkout-overlay'
import PaypalButton from 'Component/paypal-button'

import {selectSelectedMaterialPrice, selectTotalPrice} from 'Lib/selector'

const CheckoutPage = ({
  productTitle,
  materialPrice,
  shippingPrice,
  vatPrice,
  totalPrice
}) => (
  <WidgetLayout>
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={materialPrice}
      shippingPrice={shippingPrice}
      vatPrice={vatPrice}
      totalPrice={totalPrice}
      paypalButton={(
        <PaypalButton
          onClick={() => null}
          onAuthorize={() => null}
          onCancel={() => null}
          onError={() => null}
        />
      )}
    />
  </WidgetLayout>
)

const mapStateToProps = state => ({
  productTitle: state.product.title,
  materialPrice: selectSelectedMaterialPrice(state),
  shippingPrice: state.price.shippingPrice,
  vatPrice: state.price.vatPrice,
  totalPrice: selectTotalPrice(state)
})

const mapDispatchToProps = {
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(CheckoutPage)
