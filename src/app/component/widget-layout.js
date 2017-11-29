import React from 'react'

import propTypes from 'Lib/prop-types'

import ImageSlider from 'Component/image-slider'

const WidgetLayout = ({
  children,
  materialOptions,
  selectedMaterialOptionIndex,
  zoomedIn
}) => (
  <div className="widget">
    <div className="widget__background">
      <ImageSlider
        materialOptions={materialOptions}
        selectedMaterialOptionIndex={selectedMaterialOptionIndex}
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
