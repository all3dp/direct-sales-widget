import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {selectMaterialsAsArray} from 'Lib/selector'

import WLayout from 'Component/widget-layout'

import Modal from './modal'

const WidgetLayout = ({
  materials,
  selectedMaterialId,
  zoomedIn,
  children
}) => (
  <WLayout materials={materials} selectedMaterialId={selectedMaterialId} zoomedIn={zoomedIn}>
    <Modal />
    {children}
  </WLayout>
  )
const mapStateToProps = state => ({
  selectedMaterialId: state.material.selectedMaterialId,
  materials: selectMaterialsAsArray(state),
  zoomedIn: state.display.backgroundImageZoomed
})

const enhance = compose(
    connect(mapStateToProps)
  )

export default enhance(WidgetLayout)
