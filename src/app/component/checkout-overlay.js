import React, {PropTypes} from 'react'

import CheckoutLine from 'Component/checkout-line'

const CheckoutOverlay = ({
  objectTitle,
  objectPrice,
  shippingPrice,
  vatPrice,
  totalPrice,
  paypalButton
}) => (
  <div className="checkout-overlay">
    <div className="checkout-overlay__pricing">
      <CheckoutLine modifiers={['bold']} label={objectTitle} priceValue={objectPrice} />
      <CheckoutLine label="Shipping" priceValue={shippingPrice} />
      <CheckoutLine label="VAT" priceValue={vatPrice} />
      <div className="checkout-overlay__total-price">
        <CheckoutLine modifiers={['summary']} label="TOTAL" priceValue={totalPrice} />
      </div>
    </div>
    <div className="checkout-overlay__paypal-button">
      {paypalButton}
    </div>
  </div>
)

CheckoutOverlay.propTypes = {
  objectTitle: PropTypes.string.isRequired,
  objectPrice: PropTypes.number.isRequired,
  shippingPrice: PropTypes.number.isRequired,
  vatPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  paypalButton: PropTypes.node.isRequired
}

export default CheckoutOverlay
