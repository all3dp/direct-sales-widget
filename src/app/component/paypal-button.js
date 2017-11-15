import React, {PropTypes} from 'react'

const PaypalButton = ({onClick}) => (
  <button onClick={onClick} className="paypal-button">
    <img
      src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
      alt="Check out with PayPal"
    />
  </button>
)

PaypalButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default PaypalButton
