import React, {Component, PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import Image from 'Component/image'

export default class ImageContainer extends Component {
  static propTypes = {
    ...propTypes.component,
    materials: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired,
    selectedMaterialId: PropTypes.string.isRequired
  }

  calculateActiveIndex () {
    const {materials, selectedMaterialId} = this.props

    return materials.findIndex(m => m.id === selectedMaterialId)
  }

  calculatePosition () {
    const activeIndex = this.calculateActiveIndex()
    const imageWidth = 320

    return -activeIndex * imageWidth
  }

  renderImages () {
    const {materials, zoomedIn} = this.props
    return materials.map((material, index) => (
      <div className="image-slider__image">
        <Image key={index} src={material.imageSrc} zoomedIn={zoomedIn} alt={material.title} />
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
