import React from 'react'
import {storiesOf} from '@storybook/react'

import ExpandableParagraph from 'Component/expandable-paragraph'
import Paragraph from 'Component/paragraph'

storiesOf('Expandable Paragraph', module)
  .add('default', () => (
    <ExpandableParagraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum.
      </Paragraph>
    </ExpandableParagraph>
  ))
