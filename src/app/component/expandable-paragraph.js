import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Paragraph from 'Component/paragraph'

import NavigationArrow from 'Component/navigation-arrow'

const ExpandableParagraph = ({
  children,
  modifiers = [],
  classNames,
  expanded,
  toggleDescription
}) => {
  const finalModifiers = [
    ...modifiers,
    {
      expanded
    }
  ]

  return (
    <div className={buildClassName('expandable-paragraph', finalModifiers, classNames)}>
      <span className="expandable-paragraph__content">
        <Paragraph>{children}</Paragraph>
      </span>
      <button className="expandable-paragraph__button" onClick={toggleDescription}>
        {expanded ? 'CLOSE ' : 'LEARN MORE '}
        <span className="expandable-paragraph__icon">
          <NavigationArrow orientation={expanded ? 'up' : 'down'} />
        </span>
      </button>
    </div>
  )
}

ExpandableParagraph.propTypes = {
  ...propTypes,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired
}

export default ExpandableParagraph
