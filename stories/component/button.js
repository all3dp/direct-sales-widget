import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import Button from 'Component/button'
import LoadingIndicator from 'Component/loading-indicator'

storiesOf('Button', module)
  .add('default', () => (
    <Button label="Default Button" onClick={action('click')} />
  ))
  .add('disabled', () => (
    <Button label="Disabled Button" disabled onClick={action('click')} />
  ))
  .add('loading', () => (
    <Button label={<LoadingIndicator modifiers={['white']} />} onClick={action('click')} />
  ))
