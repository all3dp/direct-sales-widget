import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

import {selectTotalPrice, selectMaterialByMaterialConfigId} from 'Lib/selector'

import {selectNextMaterialOption, selectPreviousMaterialOption} from 'Action/material'
import {goToCheckout, goToAddress} from 'Action/navigation'

import {
  toggleDescription as toggleDescriptionAction,
  toggleBackgroundImageZoom as toggleBackgroundImageZoomAction
} from 'Action/display'

const DisplayPage = ({
  totalPrice,
  modelTitle,
  modelDescription,
  materialOptions,
  changeMaterialLeft,
  changeMaterialRight,
  descriptionExpanded,
  backgroundImageZoomed,
  toggleDescription,
  toggleBackgroundImageZoom,
  handleGoToCheckout,
  handleGoToAddress,
  material
}) => (
  <WidgetLayout zoomedIn={backgroundImageZoomed}>
    <WidgetHeader
      modifiers={['thick-background'].concat(descriptionExpanded ? ['expanded'] : undefined)}
      title={modelTitle}
      description={modelDescription}
      descriptionExpanded={descriptionExpanded}
      toggleDescription={toggleDescription}
      hidden={backgroundImageZoomed}
    />
    <WidgetFooter
      showControls={materialOptions.length > 1}
      modifiers={['thick-background']}
      zoomedIn={backgroundImageZoomed}
      material={material.materialConfig.name}
      buttonLabel={totalPrice ? `$${totalPrice} BUY` : 'Check Price'}
      handleButtonClick={totalPrice ? handleGoToCheckout : handleGoToAddress}
      handleChangeMaterialLeft={changeMaterialLeft}
      handleChangeMaterialRight={changeMaterialRight}
      handleToggleZoom={toggleBackgroundImageZoom}
    />
  </WidgetLayout>
  )

const mapStateToProps = state => ({
  totalPrice: selectTotalPrice(state),
  modelTitle: state.model.title,
  modelDescription: state.model.description,
  selectedMaterial: state.model.selectedModelId,
  materialOptions: state.material.materialOptions,
  material: selectMaterialByMaterialConfigId(state, state.material.selectedMaterialConfig),
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription: toggleDescriptionAction,
  toggleBackgroundImageZoom: toggleBackgroundImageZoomAction,
  changeMaterialLeft: selectPreviousMaterialOption,
  changeMaterialRight: selectNextMaterialOption,
  handleGoToCheckout: goToCheckout,
  handleGoToAddress: goToAddress
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
  )

export default enhance(DisplayPage)
