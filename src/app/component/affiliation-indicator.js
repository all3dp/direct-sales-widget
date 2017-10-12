import React from 'react'

import propTypes from 'Lib/prop-types'

import logo from 'Image/logo.svg'

const AffiliationIndicator = () => (
  <div className="affiliation-indicator">
    <span className="affiliation-indicator__text">POWERED BY</span>
    <img className="affiliation-indicator__logo" alt="All3DP Logo"src={logo} />
  </div>
)

AffiliationIndicator.propTypes = {
  ...propTypes.component
}

export default AffiliationIndicator
