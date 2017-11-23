import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const ErrorDisplay = ({classNames, modifiers, errorMessage}) => (
  <div className={buildClassName('error-display', modifiers, classNames)}>
    {errorMessage}
  </div>
)

ErrorDisplay.propTypes = {
  ...propTypes.component,
  errorMessage: PropTypes.string.isRequired
}

export default ErrorDisplay

