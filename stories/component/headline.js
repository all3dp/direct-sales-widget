import React from 'react'
import {storiesOf} from '@storybook/react'

import Headline from 'Component/headline'

storiesOf('Headline', module)
  .add('default', () => (
    <Headline label="Default Headline" />
  ))
  .add('s', () => (
    <Headline label="Small Headline" modifiers={['s']} />
  ))
