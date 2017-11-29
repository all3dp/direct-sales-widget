/* eslint react/prefer-stateless-function: 0 */
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import AddressOverlay from 'Component/address-overlay'
import WidgetFooter from 'Component/widget-footer'

import {
  updateLocation
} from 'Action/user'
import {goToDisplay} from 'Action/navigation'
import {createPriceRequest} from 'Action/price'

import {
  convertPlaceToLocation
} from 'Lib/geolocation'

class AddressPage extends React.Component {
  static propTypes = {
    address: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      street: PropTypes.string,
      houseNumber: PropTypes.string,
      addressLine2: PropTypes.string,
      city: PropTypes.string,
      zipCode: PropTypes.string,
      stateCode: PropTypes.string,
      countryCode: PropTypes.string
    }).isRequired
  }

  handleCalculatePrice = this.handleCalculatePrice.bind(this)

  handleCalculatePrice () {
    this.props.handleGetPrices()
    this.props.handleGoToDisplay()
  }

  render () {
    const {address, onUpdateLocation} = this.props

    return (
      <WidgetLayout>
        <AddressOverlay
          address={address}
          onChange={place => onUpdateLocation(convertPlaceToLocation(place))}
        />
        <WidgetFooter
          modifiers={['thick-background']}
          addressPage
          buttonLabel="Calculate Price"
          handleButtonClick={this.handleCalculatePrice}
          disabled={address.countryCode === ''}
        />
      </WidgetLayout>
    )
  }
}

const mapStateToProps = state => ({
  address: state.user.user.shippingAddress
})

const mapDispatchToProps = {
  onUpdateLocation: updateLocation,
  handleGoToDisplay: goToDisplay,
  handleGetPrices: createPriceRequest
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
  )

export default enhance(AddressPage)
