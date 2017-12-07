import React from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import WidgetHeadline from 'Component/widget-headline'
import ExpandableParagraph from 'Component/expandable-paragraph'
import WidgetParagraph from 'Component/widget-paragraph'

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
      <WidgetHeadline label={title} />
      <ExpandableParagraph
        expanded={descriptionExpanded}
        toggleDescription={toggleDescription}
      >
        <WidgetParagraph>{description}</WidgetParagraph>
      </ExpandableParagraph>
    </div>
  )
}

WidgetHeader.propTypes = {
  ...propTypes.component
}

export default WidgetHeader
