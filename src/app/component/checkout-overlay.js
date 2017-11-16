import React, {PropTypes, Component} from 'react'

import CheckoutLine from 'Component/checkout-line'

export default class CheckoutOverlay extends Component {
  static propTypes = {
    objectTitle: PropTypes.string.isRequired,
    objectPrice: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    vatPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    paypalButton: PropTypes.node.isRequired
  }

  calculateCheckoutLineValueWidth () {
    const characters = this.props.totalPrice.toString().length

    if (characters > 7) {
      return 120
    }

    if (characters > 6) {
      return 100
    }

    if (characters > 4) {
      return 80
    }

    return 70
  }

  render () {
    const {
      objectTitle,
      objectPrice,
      shippingPrice,
      vatPrice,
      totalPrice,
      paypalButton
    } = this.props

    const width = this.calculateCheckoutLineValueWidth()

    return (
      <div className="checkout-overlay">
        <div className="checkout-overlay__pricing">
          <CheckoutLine modifiers={['bold']} valueWidth={width} label={objectTitle} priceValue={objectPrice} />
          <CheckoutLine label="Shipping" valueWidth={width} priceValue={shippingPrice} />
          <CheckoutLine label="VAT" valueWidth={width} priceValue={vatPrice} />
          <div className="checkout-overlay__total-price">
            <CheckoutLine modifiers={['summary']} label="TOTAL" valueWidth={width} priceValue={totalPrice} />
          </div>
        </div>
        <div className="checkout-overlay__paypal-button">
          {paypalButton}
        </div>
      </div>
    )
  }
}
