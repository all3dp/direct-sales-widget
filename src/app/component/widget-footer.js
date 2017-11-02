import React, {PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Button from 'Component/button'
import SliderControls from 'Component/slider-controls'
import AffiliationIndicator from 'Component/affiliation-indicator'
import ZoomControl from 'Component/zoom-control'

const WidgetFooter = ({
  modifiers = [],
  classNames,
  zoomedIn,
  disabled,
  minimal,
  addressPage,
  buttonLabel,
  material,
  handleChangeMaterialLeft,
  handleChangeMaterialRight,
  handleButtonClick,
  handleToggleZoom
}) => {
  const finalModifiers = [
    ...modifiers,
    {
      'zoomed-in': zoomedIn
    }
  ]

  if (zoomedIn) {
    return (
      <div className={buildClassName('widget-footer', finalModifiers, classNames)} >
        <div className="widget-footer__right">
          <ZoomControl zoomedIn={zoomedIn} toggleZoom={handleToggleZoom} />
          <AffiliationIndicator />
        </div>
      </div>
    )
  }

  if (minimal) {
    return (
      <div className={buildClassName('widget-footer', finalModifiers, classNames)} >
        <div className="widget-footer__right">
          <AffiliationIndicator />
        </div>
      </div>
    )
  }

  if (disabled) {
    return (
      <div className={buildClassName('widget-footer', finalModifiers, classNames)} >
        <div className="widget-footer__left">
          <Button label={buttonLabel} disabled={disabled} onClick={handleButtonClick} />
        </div>
        <div className="widget-footer__right">
          <AffiliationIndicator />
        </div>
      </div>
    )
  }

  if (addressPage) {
    return (
      <div className={buildClassName('widget-footer', finalModifiers, classNames)} >
        <div className="widget-footer__left">
          <Button label={buttonLabel} onClick={handleButtonClick} />
        </div>
        <div className="widget-footer__right">
          <AffiliationIndicator />
        </div>
      </div>
    )
  }

  return (
    <div className={buildClassName('widget-footer', finalModifiers, classNames)} >
      <div className="widget-footer__left">
        <SliderControls
          label={material}
          onClickSlideLeft={handleChangeMaterialLeft}
          onClickSlideRight={handleChangeMaterialRight}
        />
        <Button label={buttonLabel} disabled={disabled} onClick={handleButtonClick} />
      </div>
      <div className="widget-footer__right">
        <ZoomControl zoomedIn={zoomedIn} toggleZoom={handleToggleZoom} />
        <AffiliationIndicator />
      </div>
    </div>
  )
}

WidgetFooter.propTypes = {
  ...propTypes.component,
  zoomedIn: PropTypes.bool,
  disabled: PropTypes.bool,
  minimal: PropTypes.bool,
  addressPage: PropTypes.bool,
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  material: PropTypes.string,
  handleChangeMaterialLeft: PropTypes.func,
  handleChangeMaterialRight: PropTypes.func,
  handleButtonClick: PropTypes.func,
  handleToggleZoom: PropTypes.func
}

export default WidgetFooter
