import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import ExpandableParagraph from 'Component/expandable-paragraph'
import WidgetParagraph from 'Component/widget-paragraph'

storiesOf('Expandable Paragraph', module)
  .add('default', () => (
    <ExpandableParagraph
      expanded={false}
      toggleDescription={action('click')}
    >
      <WidgetParagraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum.
      </WidgetParagraph>
    </ExpandableParagraph>
  ))
  .add('expanded', () => (
    <ExpandableParagraph expanded>
      <WidgetParagraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum.
      </WidgetParagraph>
    </ExpandableParagraph>
  ))
