import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import WidgetLayout from 'Container/widget-layout'
import CheckoutOverlay from 'Component/checkout-overlay'
import PaypalButton from 'Component/paypal-button'

import {selectBestOfferForSelectedMaterialOption} from 'Lib/selector'
import {createOrder, createPaymentWithPaypal} from 'Action/order'
import {goToDisplay} from 'Action/navigation'
import {paymentCreated} from 'Action/payment'

const CheckoutPage = ({
  productTitle,
  offer,
  handleCreateOrder,
  handleCreatePaymentWithPaypal,
  handlePaymentCreated,
  payment
}) => (
  <WidgetLayout>
    <CheckoutOverlay
      objectTitle={productTitle}
      objectPrice={offer.subTotalPrice}
      shippingPrice={offer.shipping.price}
      vatPrice={offer.vatPrice}
      totalPrice={offer.totalPrice}
      paypalButton={(
        <PaypalButton
          onClick={() => {
            const paypalWindow = window.open('', '_blank')
            paypalWindow.document.write('You are being redirected to PayPal...')
            handleCreateOrder()
              .then(() => handleCreatePaymentWithPaypal())
              .then((paymentResponse) => {
                handlePaymentCreated(paymentResponse)
                paypalWindow.location.href = paymentResponse.providerFields.redirectLink
                browserHistory.goBack()
              })
              .catch(() => {
                paypalWindow.close()
              })
          }}
        />
      )}
      payment={payment}
    />
  </WidgetLayout>
)

const mapStateToProps = state => ({
  productTitle: state.model.title,
  offer: selectBestOfferForSelectedMaterialOption(state),
  payment: state.payment.payment
})

const mapDispatchToProps = {
  handleGoToDisplay: goToDisplay,
  handleCreateOrder: createOrder,
  handleCreatePaymentWithPaypal: createPaymentWithPaypal,
  handlePaymentCreated: paymentCreated
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(CheckoutPage)
