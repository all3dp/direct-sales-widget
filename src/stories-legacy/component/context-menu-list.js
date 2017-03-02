import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import ContextMenuItem from '../../app/component-legacy/context-menu-item'
import ContextMenuList from '../../app/component-legacy/context-menu-list'

import icon from '../../asset-legacy/icon/placeholder.svg'

storiesOf('Context Menu List', module)
  .add('default', () => (
    <ContextMenuList>
      <ContextMenuItem icon={icon} label="My Item" onClick={action('My Item clicked')} />
      <ContextMenuItem icon={icon} label="My Item 2" onClick={action('My Item 2 clicked')} />
    </ContextMenuList>
  ))
