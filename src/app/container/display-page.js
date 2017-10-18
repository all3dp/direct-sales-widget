import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetContainer from 'Component/widget-container'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'

import {
  toggleDescription as toggleDescriptionAction,
  toggleBackgroundImageZoom as toggleBackgroundImageZoomAction
} from 'Action/display'

const DisplayPage = ({
  descriptionExpanded,
  backgroundImageZoomed,
  toggleDescription,
  toggleBackgroundImageZoom
}) => (
  <WidgetContainer zoomedIn={backgroundImageZoomed} backgroundImage="http://placehold.it/320x280">
    <WidgetHeader
      title="Raspberry Pi Case"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
      descriptionExpanded={descriptionExpanded}
      toggleDescription={toggleDescription}
      hidden={backgroundImageZoomed}
    />
    <WidgetFooter
      zoomedIn={backgroundImageZoomed}
      material={'PREMIUM PLASTIC "white"'}
      buttonLabel="$32,50 BUY"
      handleButtonClick={null}
      handleChangeMaterialLeft={null}
      handleChangeMaterialRight={null}
      handleToggleZoom={toggleBackgroundImageZoom}
    />
  </WidgetContainer>
  )
const mapStateToProps = state => ({
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription: toggleDescriptionAction,
  toggleBackgroundImageZoom: toggleBackgroundImageZoomAction
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(DisplayPage)
