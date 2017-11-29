import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

const Price = ({classNames, modifiers, value}) => (
  <div className={buildClassName('price', modifiers, classNames)}>
    {
      <div className="price__price">
        <div className="price__value">{value}</div>
      </div>
    }
  </div>
)

Price.propTypes = {
  ...propTypes.component,
  value: PropTypes.string,
  meta: PropTypes.string,
  loading: PropTypes.bool
}

export default Price
