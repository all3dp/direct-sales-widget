import React from 'react'

import propTypes from 'Lib/prop-types'

import ImageSlider from 'Component/image-slider'

const WidgetLayout = ({
  children,
  models,
  selectedModelId,
  zoomedIn
}) => (
  <div className="widget">
    <div className="widget__background">
      <ImageSlider
        models={models}
        selectedModelId={selectedModelId}
        zoomedIn={zoomedIn}
      />
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
