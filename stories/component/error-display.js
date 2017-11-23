import React from 'react'
import {storiesOf} from '@storybook/react'

import ErrorDisplay from 'Component/error-display'

storiesOf('Error Display', module)
  .add('default', () => (
    <ErrorDisplay errorMessage="An error has occured, sorry." />
  ))
