import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Icon from 'Component/icon'

import navigationArrow from 'Icon/navigation-arrow.svg'

const NavigationArrow = ({
  classNames,
  modifiers = [],
  orientation
}) => {
  const finalModifiers = [
    ...modifiers,
    orientation
  ]

  return (
    <span className={buildClassName('navigation-arrow', finalModifiers, classNames)} >
      <Icon source={navigationArrow} />
    </span>
  )
}

NavigationArrow.propTypes = {
  ...propTypes.component,
  orientation: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired
}

export default NavigationArrow
