import React from 'react'
import {storiesOf} from '@storybook/react'

import BackgroundImage from 'Component/background-image'

storiesOf('Background Image', module)
  .add('default', () => (
    <BackgroundImage width="320px" height="280px" src="http://placehold.it/320x280" />
  ))
  .add('zoomed', () => (
    <BackgroundImage width="320px" height="280px" zoom src="http://placehold.it/320x280" />
  ))
