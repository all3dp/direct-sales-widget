import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import WidgetFooter from 'Component/widget-footer'

storiesOf('Widget Footer', module)
  .add('default', () => (
    <WidgetFooter
      material={'PREMIUM PLASTIC "white"'}
      buttonLabel="$32,50 BUY"
      handleButtonClick={action('click')}
      handleChangeMaterialLeft={action('click')}
      handleChangeMaterialRight={action('click')}
      handleToggleZoom={action('click')}
    />
  ))
  .add('zoomed', () => (
    <WidgetFooter
      zoomedIn
      material={'PREMIUM PLASTIC "white"'}
      buttonLabel="$32,50 BUY"
      handleButtonClick={action('click')}
      handleChangeMaterialLeft={action('click')}
      handleChangeMaterialRight={action('click')}
      handleToggleZoom={action('click')}
    />
  ))
  .add('disabled', () => (
    <WidgetFooter
      disabled
      material={'PREMIUM PLASTIC "white"'}
      buttonLabel="$32,50 BUY"
      handleButtonClick={action('click')}
      handleChangeMaterialLeft={action('click')}
      handleChangeMaterialRight={action('click')}
      handleToggleZoom={action('click')}
    />
  ))
  .add('minimal', () => (
    <WidgetFooter
      minimal
      material={'PREMIUM PLASTIC "white"'}
      buttonLabel="$32,50 BUY"
      handleButtonClick={action('click')}
      handleChangeMaterialLeft={action('click')}
      handleChangeMaterialRight={action('click')}
      handleToggleZoom={action('click')}
    />
  ))
  .add('address page', () => (
    <WidgetFooter
      addressPage
      buttonLabel="Calculate Price"
      handleButtonClick={action('click')}
      handleChangeMaterialLeft={action('click')}
      handleChangeMaterialRight={action('click')}
      handleToggleZoom={action('click')}
    />
  ))
