import React from 'react'
import {storiesOf} from '@storybook/react'

import CheckoutOverlay from 'Component/checkout-overlay'

storiesOf('Checkout Overlay', module)
  .add('default', () => (
    <CheckoutOverlay
      objectTitle="Raspberry Pi Case"
      objectPrice={13.50}
      shippingPrice={6.50}
      vatPrice={2.58}
      totalPrice={45.08}
    />
  ))
