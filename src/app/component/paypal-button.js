import React, { Component } from 'react'
import config from '../../../config'

const paypal = global.paypal

class PaypalButton extends Component {

  render () {
    return (
      <div ref={div => { this.paypalButton = div }} />
    )
  }

  componentDidMount () {
    const { payment, onAuthorize, onCancel, onError } = this.props

    const options = {
      ...config.paypal,
      payment,
      onAuthorize,
      onCancel,
      onError,
      commit: true, // show 'Pay Now' button during checkout
      style: { size: 'small', color: 'gold', shape: 'pill' }
    }

    paypal.Button.render(options, this.paypalButton)
  }

}

export default PaypalButton
