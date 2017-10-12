import React from 'react'

import propTypes from 'Lib/prop-types'

import Button from 'Component/button'
import SliderControls from 'Component/slider-controls'
import AffiliationIndicator from 'Component/affiliation-indicator'
import ZoomControl from 'Component/zoom-control'

const WidgetFooter = ({
  zoomedIn,
  buttonLabel,
  material,
  handleChangeMaterialLeft,
  handleChangeMaterialRight,
  handleButtonClick
}) => (
  <div className="widget-footer">
    <div className="widget-footer__left">
      <SliderControls
        label={material}
        onClickSlideLeft={handleChangeMaterialLeft}
        onClickSlideRight={handleChangeMaterialRight}
      />
      <Button label={buttonLabel} onClick={handleButtonClick} />
    </div>
    <div className="widget-footer__right">
      <ZoomControl zoomedIn={zoomedIn} />
      <AffiliationIndicator />
    </div>
  </div>
)

WidgetFooter.propTypes = {
  ...propTypes.component
}

export default WidgetFooter
