import React, {Children, PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Container from 'Component/container'

const ConfigurationHeader = ({classNames, modifiers, children}) => (
  <div className={buildClassName('configuration-header', modifiers, classNames)}>
    <Container>
      <div className="configuration-header__grid">
        {
          Children.map(children, (child, index) => (
            <div className="configuration-header__cell" key={index}>
              {child}
            </div>
          ))
        }
      </div>
    </Container>
  </div>
)

ConfigurationHeader.propTypes = {
  ...propTypes.component,
  children: PropTypes.node.isRequired // Expected to have exactly 2 children
}

export default ConfigurationHeader
