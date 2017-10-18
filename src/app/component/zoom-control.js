import React, {PropTypes} from 'react'

import Icon from 'Component/icon'

import zoomIn from 'Icon/zoom-in.svg'
import zoomOut from 'Icon/zoom-out.svg'

const ZoomControl = ({zoomedIn, toggleZoom}) => (
  <div className="zoom-control" onClick={toggleZoom}>
    <Icon source={zoomedIn ? zoomOut : zoomIn} />
  </div>
)

ZoomControl.propTypes = {
  zoomedIn: PropTypes.bool.isRequired,
  toggleZoom: PropTypes.func.isRequired
}

export default ZoomControl
