import React, {Component, PropTypes} from 'react'

import propTypes from 'Lib/prop-types'
import Image from 'Component/image'

export default class ImageSlider extends Component {
  static propTypes = {
    ...propTypes.component,
    models: PropTypes.arrayOf(PropTypes.shape({
      modelId: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      fileUnit: PropTypes.string.isRequired,
      area: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
      dimensions: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired
      }).isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      displayImageUrl: PropTypes.string.isRequired
    })).isRequired,
    selectedModelId: PropTypes.string.isRequired
  }

  calculateActiveIndex () {
    const {models, selectedModelId} = this.props

    return models.findIndex(m => m.modelId === selectedModelId)
  }

  calculatePosition () {
    const activeIndex = this.calculateActiveIndex()
    const imageWidth = 320

    return -activeIndex * imageWidth
  }

  renderImages () {
    const {models, zoomedIn} = this.props
    return models.map(model => (
      <div key={model.modelId} className="image-slider__image">
        <Image src={model.displayImageUrl} zoomedIn={zoomedIn} alt={model.title} />
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
