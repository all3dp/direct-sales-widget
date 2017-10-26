import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

import {selectSelectedMaterial} from 'Lib/selector'

import {selectNextMaterial, selectPreviousMaterial} from 'Action/material'

import {
  toggleDescription as toggleDescriptionAction,
  toggleBackgroundImageZoom as toggleBackgroundImageZoomAction
} from 'Action/display'

import Modal from './modal'

const DisplayPage = ({
  productTitle,
  productDescription,
  selectedMaterial,
  changeMaterialLeft,
  changeMaterialRight,
  descriptionExpanded,
  backgroundImageZoomed,
  toggleDescription,
  toggleBackgroundImageZoom
}) => (
  <WidgetLayout zoomedIn={backgroundImageZoomed}>
    <WidgetHeader
      title={productTitle}
      description={productDescription}
      descriptionExpanded={descriptionExpanded}
      toggleDescription={toggleDescription}
      hidden={backgroundImageZoomed}
    />
    <Modal />
    <WidgetFooter
      zoomedIn={backgroundImageZoomed}
      material={selectedMaterial.title}
      buttonLabel={`$${selectedMaterial.price} BUY`}
      handleButtonClick={null}
      handleChangeMaterialLeft={changeMaterialLeft}
      handleChangeMaterialRight={changeMaterialRight}
      handleToggleZoom={toggleBackgroundImageZoom}
    />
  </WidgetLayout>
  )
const mapStateToProps = state => ({
  productTitle: state.product.title,
  productDescription: state.product.description,
  selectedMaterial: selectSelectedMaterial(state),
  selectedMaterialId: state.material.selectedMaterialId,
  materials: state.material.materials,
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription: toggleDescriptionAction,
  toggleBackgroundImageZoom: toggleBackgroundImageZoomAction,
  changeMaterialRight: selectNextMaterial,
  changeMaterialLeft: selectPreviousMaterial
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(DisplayPage)
