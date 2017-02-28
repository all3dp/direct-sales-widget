import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import Link from 'Component/link'

import backIcon from 'Icon/back.svg'

storiesOf('Link', module)
  .add('default', () => (
    <Link label="Default Link" href="#" onClick={action('click')} />
  ))
  .add('with icon', () => (
    <Link label="Link with Icon" href="#" icon={backIcon} onClick={action('click')} />
  ))
  .add('invert', () => (
    <div className="u-invert" style={{width: '100%', height: '100%'}}>
      <Link label="Inverted Link" href="#" onClick={action('click')} />
    </div>
  ))
