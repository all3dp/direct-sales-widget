import React from 'react'

import propTypes from 'Lib/prop-types'

import Headline from 'Component/headline'
import Paragraph from 'Component/paragraph'
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
    <Headline label="Shipping address required" />
    <Paragraph modifiers={['centered']}>We need your address to calculate the shipping prices!</Paragraph>
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
