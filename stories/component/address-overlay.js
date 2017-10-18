import React from 'react'
import {storiesOf} from '@storybook/react'

import AddressOverlay from 'Component/address-overlay'

storiesOf('Address Overlay', module)
  .add('default', () => (
    <AddressOverlay />
  ))
