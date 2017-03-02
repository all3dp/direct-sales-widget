import React, {PropTypes} from 'react'

import propTypes from '../lib/prop-types'
import buildClassName from '../lib/build-class-name'

const FormRow = ({classNames, modifiers, children}) => {
  const mappedChildren = React.Children.map(children, child => (
    <div className="form-row__column">{child}</div>
  ))

  return (
    <div className={buildClassName('form-row', modifiers, classNames)}>
      {mappedChildren}
    </div>
  )
}

FormRow.propTypes = {
  ...propTypes.component,
  children: PropTypes.node.isRequired
}

export default FormRow