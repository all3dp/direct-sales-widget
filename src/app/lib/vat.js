/**
 * @fileOverview calculates the VAT the customer has to pay depending
 * on their country.
 */

import config from '../../../config'
import {roundToCents} from './util'

// see: http://ec.europa.eu/taxation_customs/sites/taxation/files/resources/documents/taxation/vat/how_vat_works/rates/vat_rates_en.pdf
const EU_COUNTRY_CODES = config.pricing.euCountries
const VAT_PERCENTAGE = config.pricing.vatPercentage

function country (user) {
  return user.billingAddress.countryCode || user.shippingAddress.countryCode
}

function isEU (user) {
  return EU_COUNTRY_CODES.includes(country(user))
}

function isGerman (user) {
  return country(user) === 'DE'
}

/**
 * Get the VAT percentage based on the user's jurisdiction.
 * @param  {Object} options.user The user object containing the shipping and billing address
 * @return {number}              The percentage as a float e.g. 0.19 for 19% VAT
 */
export function getVatPercentage ({user}) {
  // Private customers EU 19%
  if (isEU(user) && !user.isCompany) return VAT_PERCENTAGE
  // Business customers EU (non-Germany) 0%
  if (isEU(user) && !isGerman(user) && user.isCompany) return 0
  // Business customers Germany 19%
  if (isGerman(user) && user.isCompany) return VAT_PERCENTAGE
  // All non-EU cutomers private & business without VAT
  return 0
}

/**
 * Calculate the VAT of the offer's items and shipping.
 * @param  {Object} offer The offer containing the items to be ordered
 * @return {number}       The calculated VAT
 */
export function getVat (productPrice, shippingPrice, vatPercentage) {
  return roundToCents((productPrice + shippingPrice) * vatPercentage)
}

