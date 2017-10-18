import React from 'react'

import propTypes from 'Lib/prop-types'

import Headline from 'Component/headline'
import Paragraph from 'Component/paragraph'
import LocationField from 'Component/location-field'

import config from '../../../config'

const AddressOverlay = ({

}) => (
  <div className="address-overlay">
    <Headline label="Shipping address required" />
    <Paragraph modifiers={['centered']}>We need your address to calculate the shipping prices!</Paragraph>
    <LocationField
      placeholder="Set your location"
      googleMapsApiKey={config.googleMapsApiKey}
      onChange={null}
    />
  </div>
)

AddressOverlay.propTypes = {
  ...propTypes.component
}

export default AddressOverlay
