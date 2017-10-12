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
    />
  ))
