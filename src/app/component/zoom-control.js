import React, {PropTypes} from 'react'

import Icon from 'Component/icon'

import zoomIn from 'Icon/zoom-in.svg'
import zoomOut from 'Icon/zoom-out.svg'

const ZoomControl = ({zoomedOut = true, toggleZoom}) => (
  <div className="zoom-control" onClick={toggleZoom}>
    <Icon source={zoomedOut ? zoomIn : zoomOut} />
  </div>
)

ZoomControl.propTypes = {
  zoomedOut: PropTypes.bool.isRequired,
  toggleZoom: PropTypes.func.isRequired
}

export default ZoomControl
