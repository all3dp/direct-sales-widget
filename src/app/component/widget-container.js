import React from 'react'

import propTypes from 'Lib/prop-types'

import BackgroundImage from 'Component/background-image'

const WidgetContainer = ({
  children,
  backgroundImage
}) => (
  <div className="widget">
    <div className="widget__background">
      <BackgroundImage src={backgroundImage} />
    </div>
    <div className="widget__content">
      {children}
    </div>
  </div>
)

WidgetContainer.propTypes = {
  ...propTypes.component
}

export default WidgetContainer
