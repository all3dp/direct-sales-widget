import React from 'react'
import {storiesOf} from '@storybook/react'

import WidgetHeadline from 'Component/WidgetHeadline'

storiesOf('WidgetHeadline', module)
  .add('default', () => (
    <WidgetHeadline label="Default Headline" />
  ))
  .add('s', () => (
    <WidgetHeadline label="Small Headline" modifiers={['s']} />
  ))
