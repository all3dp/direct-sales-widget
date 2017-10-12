import React from 'react'
import {storiesOf} from '@storybook/react'

import SliderControls from 'Component/slider-controls'

storiesOf('Slider Controls', module)
  .add('default', () => (
    <SliderControls material={'PREMIUM PLASTIC "white"'} />
  ))
