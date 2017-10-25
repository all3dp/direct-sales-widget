import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import AddressOverlay from 'Component/address-overlay'
import WidgetFooter from 'Component/widget-footer'

import {
  updateLocation
} from 'Action/user'

import {
  convertPlaceToLocation
} from 'Lib/geolocation'

const AddressPage = ({
  address,
  onUpdateLocation
}) => (
  <WidgetLayout>
    <AddressOverlay
      address={address}
      onChange={place => onUpdateLocation(convertPlaceToLocation(place))}
    />
    <WidgetFooter
      modifiers={['thick-background']}
      addressPage
      buttonLabel="Calculate Price"
      handleButtonClick={null}
    />
  </WidgetLayout>
  )
const mapStateToProps = state => ({
  address: state.user.user.shippingAddress
})

const mapDispatchToProps = {
  onUpdateLocation: updateLocation
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(AddressPage)
