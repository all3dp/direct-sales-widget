import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const CheckoutLine = ({
  label,
  priceValue,
  modifiers,
  classNames
}) => (
  <div className={buildClassName('checkout-line', modifiers, classNames)} >
    <span className="checkout-line__label">{label}:</span>
    <span className="checkout-line__value">
      <span className="checkout-line__currency">$</span>
      <span className="checkout-line__price">{priceValue.toString()}</span>
    </span>
  </div>
)

CheckoutLine.propTypes = {
  ...propTypes.component,
  label: PropTypes.string.isRequired,
  priceValue: PropTypes.number.isRequired
}

export default CheckoutLine
