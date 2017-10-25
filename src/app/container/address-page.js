import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Component/widget-layout'
import AddressOverlay from 'Component/address-overlay'
import WidgetFooter from 'Component/widget-footer'

import {
  updateLocation
} from 'Action/user'

import {
  convertPlaceToLocation
} from 'Lib/geolocation'

import Modal from './modal'

const AddressPage = ({
  address,
  onUpdateLocation
}) => (
  <WidgetLayout backgroundImage="http://placehold.it/320x280">
    <AddressOverlay
      address={address}
      onChange={place => onUpdateLocation(convertPlaceToLocation(place))}
    />
    <Modal />
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
