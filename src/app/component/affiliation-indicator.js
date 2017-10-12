import React from 'react'

import propTypes from 'Lib/prop-types'

import logo from 'Image/logo.svg'

const AffiliationIndicator = () => (
  <a className="affiliation-indicator" href="https://all3dp.com/" rel="noopener noreferrer" target="_blank" >
    <span className="affiliation-indicator__text">POWERED BY</span>
    <img className="affiliation-indicator__logo" alt="All3DP Logo"src={logo} />
  </a>
)

AffiliationIndicator.propTypes = {
  ...propTypes.component
}

export default AffiliationIndicator
