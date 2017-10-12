import React from 'react'
import {storiesOf} from '@storybook/react'

import ZoomControl from 'Component/zoom-control'

storiesOf('Zoom Control', module)
  .add('default', () => (
    <ZoomControl />
  ))
  .add('alternative', () => (
    <ZoomControl zoomedOut={false} />
  ))
