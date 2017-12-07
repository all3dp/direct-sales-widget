import config from '../../../config'
import {requestJson} from './http'
import * as printingEngine from 'Lib/printing-engine'

const PAYMENT_ENDPOINT = `${config.printingEngineBaseUrl}/payment/paypal`

export function createPayment ({amount, currency, offerId}) {
  const paypal = global.paypal

  const env = config.paypal.env
  const client = config.paypal.client
  const transactions = [{
    custom: offerId,
    amount: {
      total: String(amount),
      currency
    }
  }]
  return paypal.rest.payment.create(env, client, {transactions})
}

export async function executePayment ({data, paymentId}) {
  if (!data.paymentID) throw new Error('Payment failed')

  const payment = await printingEngine.executePaypalPayment({
    payerId: data.payerID,
    paymentId
  })

  if (!payment.status) throw new Error('PayPal payment not approved')
  return payment
}
