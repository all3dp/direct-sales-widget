import React from 'react'
import {storiesOf} from '@storybook/react'

import NavigationArrow from 'Component/navigation-arrow'

storiesOf('Navigation Arrow', module)
  .add('left', () => (
    <NavigationArrow orientation="left" />
  ))
  .add('up', () => (
    <NavigationArrow orientation="up" />
  ))
  .add('right', () => (
    <NavigationArrow orientation="right" />
  ))
  .add('down', () => (
    <NavigationArrow orientation="down" />
  ))
