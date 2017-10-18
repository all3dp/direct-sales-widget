import React from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Headline from 'Component/headline'
import ExpandableParagraph from 'Component/expandable-paragraph'

const WidgetHeader = ({
  title,
  description,
  hidden,
  modifiers = [],
  classNames,
  descriptionExpanded,
  toggleDescription
}) => {
  const finalModifiers = [
    ...modifiers,
    {
      hidden
    }
  ]

  return (
    <div className={buildClassName('widget-header', finalModifiers, classNames)} >
      <Headline label={title} />
      <ExpandableParagraph
        expanded={descriptionExpanded}
        toggleDescription={toggleDescription}
      >
        {description}
      </ExpandableParagraph>
    </div>
  )
}

WidgetHeader.propTypes = {
  ...propTypes.component
}

export default WidgetHeader
