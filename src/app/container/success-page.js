import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import {createOrderWithPaypal} from 'Action/order'

import PageHeader from 'Component/page-header'
import Link from 'Component/link'
import Section from 'Component/section'
import Headline from 'Component/headline'
import Paragraph from 'Component/paragraph'
// import ProviderImage from 'Component/provider-image'

import AppLayout from './app-layout'

class SuccessPage extends React.Component {

  componentDidMount () {
    const {
      location: {
        query: {
          PayerID: paypalPayerId,
          paymentId: paypalPaymentId
        }
      },
      params: {
        paymentId
      }
    } = this.props
    this.props.handleCreateOrderWithPaypal(paypalPayerId, paypalPaymentId, paymentId)
  }

  render () {
    // const {location: {query}} = this.props

    return (
      <AppLayout>
        <PageHeader label="Thank you for your order at ALL3DP!" />
        <Section modifiers={['highlight']}>
          {/* <Headline
            label={
              query.orderNumber
                ? `Order number: ${query.orderNumber}`
                : 'Thank you for ordering at ALL3DP!'
            }
          /> */}
          <Paragraph modifiers={['l']}>
            You should shortly receive an email confirming your order.
          </Paragraph>
          <Paragraph modifiers={['l']}>
            Please note that your order will be produced and sent from:
          </Paragraph>
          {/* <Paragraph modifiers={['l']}>
            <ProviderImage name={query.printingService} />
          </Paragraph> */}
          <Headline label="Any questions?" />
          <Paragraph modifiers={['l']}>
            Email us on <Link href="mailto:support@all3dp.com" label="support@all3dp.com" />
          </Paragraph>
        </Section>
      </AppLayout>
    )
  }
}

const mapStateToProps = state => ({
  offer: state.price.selectedOffer,
  order: state.order
})

const mapDispatchToProps = {
  handleCreateOrderWithPaypal: createOrderWithPaypal
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(SuccessPage)
