import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const WidgetParagraph = ({classNames, modifiers, children}) => (
  <p className={buildClassName('widget-paragraph', modifiers, classNames)}>
    {children}
  </p>
)

WidgetParagraph.propTypes = {
  ...propTypes.component,
  children: PropTypes.node.isRequired
}

export default WidgetParagraph

