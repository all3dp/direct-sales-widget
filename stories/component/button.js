import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import Button from 'Component/button'

storiesOf('Button', module)
  .add('default', () => (
    <Button label="Default Button" onClick={action('click')} />
  ))
  .add('disabled', () => (
    <Button label="Disabled Button" disabled onClick={action('click')} />
  ))
