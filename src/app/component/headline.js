import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const Headline = ({modifiers = [], classNames, label, tag = 'h1'}) => React.createElement(tag, {
  className: buildClassName('headline', modifiers, classNames)
}, [
  label
])

Headline.propTypes = {
  ...propTypes.component,
  tag: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default Headline
