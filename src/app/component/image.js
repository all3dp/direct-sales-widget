import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const Image = ({modifiers = [], classNames, zoomedIn, src, alt = '', key}) => {
  const finalModifiers = [
    ...modifiers,
    {
      'zoomed-in': zoomedIn
    }
  ]

  return (
    <div className="image-container" key={key}>
      <img className={buildClassName('image', finalModifiers, classNames)} src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  ...propTypes.component,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image
