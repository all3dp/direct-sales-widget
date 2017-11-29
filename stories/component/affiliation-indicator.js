import React from 'react'
import {storiesOf} from '@storybook/react'

import AffiliationIndicator from 'Component/affiliation-indicator'

storiesOf('Affiliation Indicator', module)
  .add('default', () => (
    <AffiliationIndicator />
  ))
