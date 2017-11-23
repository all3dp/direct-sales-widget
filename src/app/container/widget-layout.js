import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import Wlayout from 'Component/widget-layout'

const WidgetLayout = ({
  models,
  selectedModelId,
  zoomedIn,
  children
}) => (
  <Wlayout models={models} selectedModelId={selectedModelId} zoomedIn={zoomedIn}>
    {children}
  </Wlayout>
  )

const mapStateToProps = state => ({
  selectedModelId: state.model.selectedModelId,
  models: state.model.models,
  zoomedIn: state.display.backgroundImageZoomed
})

const enhance = compose(
    connect(mapStateToProps)
  )

export default enhance(WidgetLayout)
