import React from 'react'

import propTypes from 'Lib/prop-types'

import WidgetHeadline from 'Component/widget-headline'
import WidgetParagraph from 'Component/widget-paragraph'
import LocationField from 'Component/location-field'

import {
  formatAddress
} from 'Lib/formatter'

import config from '../../../config'

const AddressOverlay = ({
  onChange,
  address
}) => (
  <div className="address-overlay">
    <WidgetHeadline label="Shipping address required" />
    <WidgetParagraph modifiers={['centered']}>We need your address to calculate the shipping prices!</WidgetParagraph>
    <LocationField
      value={formatAddress(address)}
      placeholder="Set your location"
      googleMapsApiKey={config.googleMapsApiKey}
      onChange={onChange}
    />
  </div>
  )

AddressOverlay.propTypes = {
  ...propTypes.component
}

export default AddressOverlay
