import React, {PropTypes} from 'react'

import NavigationArrow from 'Component/navigation-arrow'

const SliderControls = ({showControls, label, onClickSlideLeft, onClickSlideRight}) => (
  <div className="slider-controls">
    { showControls && <div onClick={onClickSlideLeft}><NavigationArrow orientation="left" /></div> }
    <span className="slider-controls__material">{label}</span>
    { showControls && <div onClick={onClickSlideRight}><NavigationArrow orientation="right" /></div> }
  </div>
)

SliderControls.defaultProps = {
  showControls: true
}

SliderControls.propTypes = {
  label: PropTypes.string.isRequired,
  onClickSlideLeft: PropTypes.func.isRequired,
  onClickSlideRight: PropTypes.func.isRequired,
  showControls: PropTypes.bool
}

export default SliderControls
