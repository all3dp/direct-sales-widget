import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import ZoomControl from 'Component/zoom-control'

storiesOf('Zoom Control', module)
  .add('default', () => (
    <ZoomControl toggleZoom={action('click')} />
  ))
  .add('alternative', () => (
    <ZoomControl zoomedOut={false} toggleZoom={action('click')} />
  ))
