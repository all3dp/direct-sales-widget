import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const Image = ({modifiers, classNames, src, width = '100%', height = '100%'}) => (
  <div className={buildClassName('background-image', modifiers, classNames)} style={{backgroundImage: `url(${src})`, width, height}} />
)

Image.propTypes = {
  ...propTypes.component,
  src: PropTypes.string.isRequired
}

export default Image
