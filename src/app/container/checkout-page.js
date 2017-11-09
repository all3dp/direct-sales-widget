import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import CheckoutOverlay from 'Component/checkout-overlay'
import PaypalButton from 'Component/paypal-button'

import {selectModelTitle, selectOffer} from 'Lib/selector'

const CheckoutPage = ({
  productTitle,
  offer
}) => (
  <WidgetLayout>
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={offer.subTotalPrice}
      shippingPrice={offer.shipping.price}
      vatPrice={offer.vatPrice}
      totalPrice={offer.totalPrice}
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
  productTitle: selectModelTitle(state),
  offer: selectOffer(state)
})

const mapDispatchToProps = {
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(CheckoutPage)
