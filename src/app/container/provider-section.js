import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {buildClassArray} from 'Lib/build-class-name'
import {selectOffersForSelectedMaterialConfig} from 'Lib/selector'
import {
  formatPrice,
  formatShipping
} from 'Lib/formatter'

import Section from 'Component/section'
import Headline from 'Component/headline'
import ProviderList from 'Component/provider-list'
import ProviderItem from 'Component/provider-item'

import {selectOffer} from 'Action/price'
import {goToAddress} from 'Action/navigation'

const ProviderSection = ({
  selectedMaterialConfig,
  offers,
  onSelectOffer,
  onGoToAddress
}) => {
  const disabled = !selectedMaterialConfig || !offers
  const headlineModifiers = buildClassArray({
    xl: true,
    disabled
  })

  const renderProviderList = () => (
    <ProviderList>
      {
        offers
        .sort((a, b) => a.totalPrice > b.totalPrice)
        .map((offer, index) => (
          <ProviderItem
            key={index}
            provider={offer.printingService}
            price={formatPrice(offer.totalPrice, offer.currency, offer.priceEstimated)}
            shipping={formatShipping(offer.shipping)}
            onCheckoutClick={() => {
              onSelectOffer(offer)
              onGoToAddress()
            }}
          />
        ))
      }
    </ProviderList>
  )

  return (
    <Section id="section-provider">
      <Headline label="3. Choose a provider and shipping option" modifiers={headlineModifiers} />
      {!disabled && renderProviderList()}
    </Section>
  )
}

const mapStateToProps = state => ({
  selectedMaterialConfig: state.material.selectedMaterialConfig,
  offers: selectOffersForSelectedMaterialConfig(state)
})

const mapDispatchToProps = {
  onSelectOffer: selectOffer,
  onGoToAddress: goToAddress
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ProviderSection)
