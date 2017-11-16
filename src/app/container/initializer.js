import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {init} from 'Action/init'
import LoadingContainer from 'Component/loading-container'

class Initializer extends React.Component {
  componentDidMount () {
    this.props.initApp(this.props.location.query.configurationId)
  }
  render () {
    const {children, initialized} = this.props

    return (
      <div>
        {initialized
        ? children
        : <LoadingContainer />
      }
      </div>
    )
  }
}

Initializer.propTypes = {
  initApp: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  initialized: state.init.initialized
})

const mapDispatchToProps = {
  initApp: init
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
)

export default enhance(Initializer)
