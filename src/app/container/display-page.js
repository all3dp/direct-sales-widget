import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

import {selectSelectedModel, selectTotalPrice, selectMaterialByMaterialConfigId} from 'Lib/selector'

import {selectPreviousModel, selectNextModel} from 'Action/model'
import {goToCheckout, goToAddress} from 'Action/navigation'

import {
  toggleDescription as toggleDescriptionAction,
  toggleBackgroundImageZoom as toggleBackgroundImageZoomAction
} from 'Action/display'

const DisplayPage = ({
  totalPrice,
  selectedModel,
  changeModelLeft,
  changeModelRight,
  descriptionExpanded,
  backgroundImageZoomed,
  toggleDescription,
  toggleBackgroundImageZoom,
  handleGoToCheckout,
  handleGoToAddress,
  material,
  models
}) => (
  <WidgetLayout zoomedIn={backgroundImageZoomed}>
    <WidgetHeader
      modifiers={['thick-background']}
      title={selectedModel.title}
      description={selectedModel.description}
      descriptionExpanded={descriptionExpanded}
      toggleDescription={toggleDescription}
      hidden={backgroundImageZoomed}
    />
    <WidgetFooter
      showControls={models.length > 1}
      modifiers={['thick-background']}
      zoomedIn={backgroundImageZoomed}
      material={material.material.name}
      buttonLabel={totalPrice ? `$${totalPrice} BUY` : 'Check Price'}
      handleButtonClick={totalPrice ? handleGoToCheckout : handleGoToAddress}
      handleChangeMaterialLeft={changeModelLeft}
      handleChangeMaterialRight={changeModelRight}
      handleToggleZoom={toggleBackgroundImageZoom}
    />
  </WidgetLayout>
  )

const mapStateToProps = state => ({
  totalPrice: selectTotalPrice(state),
  selectedModel: selectSelectedModel(state),
  selectedModelId: state.model.selectedModelId,
  models: state.model.models,
  material: selectMaterialByMaterialConfigId(state, state.material.selectedMaterialConfig),
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription: toggleDescriptionAction,
  toggleBackgroundImageZoom: toggleBackgroundImageZoomAction,
  changeModelLeft: selectPreviousModel,
  changeModelRight: selectNextModel,
  handleGoToCheckout: goToCheckout,
  handleGoToAddress: goToAddress
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
  )

export default enhance(DisplayPage)
