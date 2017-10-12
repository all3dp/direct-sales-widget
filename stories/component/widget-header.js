import React from 'react'
import {storiesOf} from '@storybook/react'

import WidgetHeader from 'Component/widget-header'

storiesOf('Widget Header', module)
  .add('default', () => (
    <WidgetHeader title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
  ))
  .add('hidden', () => (
    <WidgetHeader hidden title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
  ))
