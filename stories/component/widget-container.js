import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import WidgetContainer from 'Component/widget-container'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

storiesOf('Widget Container', module)
  .add('default', () => (
    <WidgetContainer backgroundImage="http://placehold.it/320x280" />
  ))
  .add('display', () => (
    <WidgetContainer backgroundImage="http://placehold.it/320x280">
      <WidgetHeader title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetContainer>
  ))
  .add('display zoomed', () => (
    <WidgetContainer backgroundImage="http://placehold.it/320x280">
      <WidgetHeader hidden title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        zoomedIn
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetContainer>
  ))
  .add('disabled footer', () => (
    <WidgetContainer backgroundImage="http://placehold.it/320x280">
      <WidgetHeader hidden title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        disabled
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetContainer>
  ))
