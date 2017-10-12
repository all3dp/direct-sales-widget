import React from 'react'

import propTypes from 'Lib/prop-types'

import Headline from 'Component/headline'
import ExpandableParagraph from 'Component/expandable-paragraph'

const WidgetHeader = ({title, description}) => (
  <div className="widget-header">
    <Headline label={title} />
    <ExpandableParagraph>
      {description}
    </ExpandableParagraph>
  </div>
)

WidgetHeader.propTypes = {
  ...propTypes.component
}

export default WidgetHeader
