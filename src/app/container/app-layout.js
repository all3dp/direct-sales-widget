import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import App from 'Component/app'
import StickyContainer from 'Component/sticky-container'
import Container from 'Component/container'
import Header from 'Component/header'
import Footer from 'Component/footer'
import Link from 'Component/link'

import {goToHome, goToAddress} from 'Action/navigation'

const AppLayout = ({
  children,
  configurationHeader,
  onGoToHome
}) => {
  const header = (
    <Header key="header" onClickIdentity={onGoToHome}>
      <div />
    </Header>
  )

  const footer = (
    <Footer copyline="© Copyright 2017 ALL3DP GmbH">
      <Link
        label="Terms and conditions"
        target="_blank"
        href="https://all3dp.com/3dp-price-comparison-terms-of-service/"
      />
      <Link label="Imprint" target="_blank" href="https://all3dp.com/terms-of-use/#imprint" />
    </Footer>
  )

  return (
    <App
      header={[
        header,
        Boolean(configurationHeader) && (
          <StickyContainer key="configHeader">{configurationHeader}</StickyContainer>
        )
      ]}
      footer={footer}
    >
      <Container>{children}</Container>
    </App>
  )
}

const mapStateToProps = state => ({
  isDirectSales: state.configuration.isDirectSales
})

const mapDispatchToProps = {
  onGoToHome: goToHome,
  onGoToAddress: goToAddress
}

const enhance = compose(connect(mapStateToProps, mapDispatchToProps))

export default enhance(AppLayout)
