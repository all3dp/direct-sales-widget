import React, {Component, PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import Image from 'Component/image'

export default class ImageSlider extends Component {
  static propTypes = {
    ...propTypes.component,
    materialOptions: PropTypes.arrayOf(PropTypes.shape({
      materialConfigId: PropTypes.string.isRequired,
      displayImageUrl: PropTypes.string.isRequired
    })).isRequired,
    selectedMaterialOptionIndex: PropTypes.number.isRequired
  }

  calculatePosition () {
    const activeIndex = this.props.selectedMaterialOptionIndex
    const imageWidth = 320

    return -activeIndex * imageWidth
  }

  renderImages () {
    const {materialOptions, zoomedIn} = this.props
    return materialOptions.map(materialOption => (
      <div key={materialOption.materialConfigId} className="image-slider__image">
        <Image src={materialOption.displayImageUrl} zoomedIn={zoomedIn} alt={materialOption.materialConfigId} />
      </div>
    )
    )
  }

  render () {
    const images = this.renderImages()
    const containerStyles = {
      left: this.calculatePosition()
    }

    return (
      <div className={'image-slider'}>
        <div className="image-slider__container" data-position={this.calculatePosition()} style={containerStyles}>
          {images}
        </div>
      </div>
    )
  }
}
