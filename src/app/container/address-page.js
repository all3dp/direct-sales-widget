import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetContainer from 'Component/widget-container'
import AddressOverlay from 'Component/address-overlay'
import WidgetFooter from 'Component/widget-footer'

import {
  toggleDescription,
  toggleBackgroundImageZoom
} from 'Action/display'

const DisplayPage = () => (
  <WidgetContainer backgroundImage="http://placehold.it/320x280">
    <AddressOverlay />
    <WidgetFooter
      modifiers={['thick-background']}
      addressPage
      buttonLabel="Calculate Price"
      handleButtonClick={null}
      handleChangeMaterialLeft={null}
      handleChangeMaterialRight={null}
    />
  </WidgetContainer>
  )
const mapStateToProps = state => ({
  descriptionExpanded: state.display.descriptionExpanded,
  backgroundImageZoomed: state.display.backgroundImageZoomed
})

const mapDispatchToProps = {
  toggleDescription,
  toggleBackgroundImageZoom
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(DisplayPage)
