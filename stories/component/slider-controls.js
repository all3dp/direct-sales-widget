import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import SliderControls from 'Component/slider-controls'

storiesOf('Slider Controls', module)
  .add('default', () => (
    <SliderControls
      material={'PREMIUM PLASTIC "white"'}
      onClickSlideRight={action('click')}
      onClickSlideLeft={action('click')}
    />
  ))
