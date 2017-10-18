import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const Image = ({modifiers = [], classNames, src, zoomedIn, width = '100%', height = '100%'}) => {
  const finalModifiers = [
    ...modifiers,
    {
      zoom: zoomedIn
    }
  ]
  return (
    <div className={buildClassName('background-image', finalModifiers, classNames)} style={{backgroundImage: `url(${src})`, width, height}} />
  )
}

Image.propTypes = {
  ...propTypes.component,
  src: PropTypes.string.isRequired,
  zoomedIn: PropTypes.bool.isRequired
}

Image.defaultProps = {
  zoomedIn: false
}

export default Image
