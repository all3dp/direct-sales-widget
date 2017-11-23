import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import ErrorDisplay from '../component/error-display'

const ErrorPage = ({
  errorMessage
}) => (
  <div>
    <ErrorDisplay errorMessage={errorMessage} />
  </div>
  )

const mapStateToProps = state => ({
  errorMessage: state.error.message
})

const enhance = compose(
    connect(mapStateToProps)
  )

export default enhance(ErrorPage)
