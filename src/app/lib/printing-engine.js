import config from '../../../config'
import {upload, requestJson, requestWithResponse, fetch} from '../service/http'

const baseUrl = config.printingEngineBaseUrl

export const uploadModel = (file, params, onProgress) =>
  upload(`${baseUrl}/model`, file, params, onProgress)

export const listMaterials = () => requestJson(`${baseUrl}/v1/material`)

export const createUser = ({user}) => requestJson(`${baseUrl}/v1/user`, {method: 'POST', body: user})

export const updateUser = ({userId, user}) => requestJson(`${baseUrl}/v1/user/${userId}`, {method: 'PUT', body: user})

export const createPriceRequest = options =>
  requestJson(`${baseUrl}/v1/price`, {
    method: 'POST',
    body: options
  })

export const getPrice = ({priceId}) => requestJson(`${baseUrl}/v1/price/${priceId}`)

export const getPriceStatus = async ({priceId}) => {
  const response = await fetch(`${baseUrl}/v1/price/${priceId}`)
  return response.status === 200
}

export const getPriceWithStatus = async ({priceId}) => {
  const response = await requestWithResponse(`${baseUrl}/v1/price/${priceId}`)
  return {
    price: response.data,
    isComplete: response.rawResponse.status === 200
  }
}

export const createShoppingCart = cart =>
  requestJson(`${baseUrl}/v1/cart`, {
    method: 'POST',
    body: cart
  })

export const getFinalCartPrice = ({cartId}) =>
  requestJson(`${baseUrl}/v1/cart/${cartId}`)

export const order = ({userId, priceId, offerId}) =>
  requestJson(`${baseUrl}/v2/order`, {
    method: 'POST',
    body: {
      userId,
      priceId,
      offerId
    }
  })

export const createPaypalPayment = ({orderId, transactions}) => {
  const payment = requestJson(`${baseUrl}/v2/payment/paypal`, {
    method: 'POST',
    body: {
      orderId,
      transactions
    }
  })

  return payment
}

export const createConfiguration = configuration =>
  requestJson(`${baseUrl}/v1/configuration`, {
    method: 'POST',
    body: configuration
  })

export const getConfiguration = configurationId =>
  requestJson(`${baseUrl}/v1/configuration/${configurationId}`)
