import React, {PropTypes} from 'react'

import CheckoutLine from 'Component/checkout-line'
import PaypalButton from 'Component/paypal-button'

const CheckoutOverlay = ({
  objectTitle,
  objectPrice,
  shippingPrice,
  vatPrice,
  totalPrice,
  handleCheckoutClick,
  handleCheckoutAuthorize,
  handleCheckoutCancel,
  handleCheckoutError
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
    <PaypalButton
      onClick={handleCheckoutClick}
      onAuthorize={handleCheckoutAuthorize}
      onCancel={handleCheckoutCancel}
      onError={handleCheckoutError}
    />
  </div>
)

CheckoutOverlay.propTypes = {
  objectTitle: PropTypes.string.isRequired,
  objectPrice: PropTypes.number.isRequired,
  shippingPrice: PropTypes.number.isRequired,
  vatPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
}

export default CheckoutOverlay
