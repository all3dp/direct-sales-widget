import React from 'react'

import propTypes from 'Lib/prop-types'

import Image from 'Component/image'

const WidgetLayout = ({
  children,
  backgroundImage,
  zoomedIn
}) => (
  <div className="widget">
    <div className="widget__background">
      <Image zoomedIn={zoomedIn} src={backgroundImage} />
    </div>
    <div className="widget__content">
      {children}
    </div>
  </div>
)

WidgetLayout.propTypes = {
  ...propTypes.component
}

export default WidgetLayout
