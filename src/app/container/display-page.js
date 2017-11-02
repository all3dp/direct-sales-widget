import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

import {selectSelectedMaterial, selectTotalPrice} from 'Lib/selector'

import {changeToNextMaterial, changeToPreviousMaterial} from 'Action/material'
import {goToCheckout} from 'Action/navigation'

import {
  toggleDescription as toggleDescriptionAction,
  toggleBackgroundImageZoom as toggleBackgroundImageZoomAction
} from 'Action/display'

import Modal from './modal'

const DisplayPage = ({
  productTitle,
  productDescription,
  totalPrice,
  selectedMaterial,
  changeMaterialLeft,
  changeMaterialRight,
  descriptionExpanded,
  backgroundImageZoomed,
  toggleDescription,
  toggleBackgroundImageZoom,
  handleGoToCheckout
}) => (
  <WidgetLayout zoomedIn={backgroundImageZoomed}>
    <WidgetHeader
      modifiers={['thick-background']}
      title={productTitle}
      description={productDescription}
      descriptionExpanded={descriptionExpanded}
      toggleDescription={toggleDescription}
      hidden={backgroundImageZoomed}
    />
    <Modal />
    <WidgetFooter
      modifiers={['thick-background']}
      zoomedIn={backgroundImageZoomed}
      material={selectedMaterial.title}
      buttonLabel={`$${totalPrice} BUY`}
      handleButtonClick={() => {
        handleGoToCheckout()
      }}
      handleChangeMaterialLeft={changeMaterialLeft}
      handleChangeMaterialRight={changeMaterialRight}
      handleToggleZoom={toggleBackgroundImageZoom}
    />
  </WidgetLayout>
  )
const mapStateToProps = state => ({
  productTitle: state.product.title,
  productDescription: state.product.description,
  totalPrice: selectTotalPrice(state),
  selectedMaterial: selectSelectedMaterial(state),
  selectedMaterialId: state.material.selectedMaterialId,
  materials: state.material.materials,
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription: toggleDescriptionAction,
  toggleBackgroundImageZoom: toggleBackgroundImageZoomAction,
  changeMaterialRight: changeToNextMaterial,
  changeMaterialLeft: changeToPreviousMaterial,
  handleGoToCheckout: goToCheckout
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(DisplayPage)
