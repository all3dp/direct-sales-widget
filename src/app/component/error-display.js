import React, {PropTypes} from 'react'
import {browserHistory} from 'react-router'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import WidgetHeadline from 'Component/widget-headline'

const ErrorDisplay = ({classNames, modifiers, errorMessage}) => (
  <div className={buildClassName('error-display', modifiers, classNames)}>
    <WidgetHeadline label="An error has occured!" />
    <div className="error-display__message">{errorMessage}</div>
    <p className="error-display__actions">
      <span className="error-display__action" onClick={() => browserHistory.goBack()}>Try again </span>
      or
      <a className="error-display__action" href="mailto:support@all3dp.com"> report the problem!</a>
    </p>
  </div>
)

ErrorDisplay.propTypes = {
  ...propTypes.component,
  errorMessage: PropTypes.string.isRequired
}

export default ErrorDisplay

