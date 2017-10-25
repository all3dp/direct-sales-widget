import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import CheckoutOverlay from 'Component/checkout-overlay'
import PaypalButton from 'Component/paypal-button'

import {selectSelectedMaterialPrice} from 'Lib/selector'

const CheckoutPage = ({
  productTitle,
  productPrice
}) => (
  <WidgetLayout>
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={productPrice}
      shippingPrice={6.50}
      vatPrice={2.58}
      totalPrice={45.08}
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
  productPrice: selectSelectedMaterialPrice(state)
})

const mapDispatchToProps = {
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(CheckoutPage)
