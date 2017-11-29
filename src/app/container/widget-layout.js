import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import Wlayout from 'Component/widget-layout'

const WidgetLayout = ({
  materialOptions,
  selectedMaterialOptionIndex,
  zoomedIn,
  children
}) => (
  <Wlayout
    materialOptions={materialOptions}
    selectedMaterialOptionIndex={selectedMaterialOptionIndex}
    zoomedIn={zoomedIn}
  >
    {children}
  </Wlayout>
  )

const mapStateToProps = state => ({
  selectedMaterialOptionIndex: state.material.selectedMaterialOptionIndex,
  materialOptions: state.material.materialOptions,
  zoomedIn: state.display.backgroundImageZoomed
})

const enhance = compose(
    connect(mapStateToProps)
  )

export default enhance(WidgetLayout)
