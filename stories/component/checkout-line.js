import React from 'react'
import {storiesOf} from '@storybook/react'

import CheckoutLine from 'Component/checkout-line'

storiesOf('Checkout Line', module)
  .add('default', () => (
    <CheckoutLine
      label="Shipping"
      priceValue={6.50}
    />
  ))
  .add('bold', () => (
    <CheckoutLine
      modifiers={['bold']}
      label="Raspberry Pi Case"
      priceValue={13.50}
    />
  ))
