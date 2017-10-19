import React from 'react'

import propTypes from 'Lib/prop-types'

import BackgroundImage from 'Component/background-image'

const WidgetContainer = ({
  children,
  backgroundImage,
  zoomedIn
}) => (
  <div className="widget">
    <div className="widget__background">
      <BackgroundImage zoomedIn={zoomedIn} src={backgroundImage} />
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
