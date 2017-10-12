import React, {PropTypes} from 'react'

import NavigationArrow from 'Component/navigation-arrow'

const SliderControls = ({label, onClickSlideLeft, onClickSlideRight}) => (
  <div className="slider-controls">
    <div onClick={onClickSlideLeft}><NavigationArrow orientation="left" /></div>
    <span className="slider-controls__material">{label}</span>
    <div onClick={onClickSlideRight}><NavigationArrow orientation="right" /></div>
  </div>
)

SliderControls.propTypes = {
  label: PropTypes.string.isRequired,
  onClickSlideLeft: PropTypes.func.isRequired,
  onClickSlideRight: PropTypes.func.isRequired
}

export default SliderControls
