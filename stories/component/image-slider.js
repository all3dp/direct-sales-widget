import React from 'react'
import {storiesOf} from '@storybook/react'

import ImageSlider from 'Component/image-slider'

import product from '../../test-data/mock/object.json'

storiesOf('Image Slider', module)
  .add('default', () => (
    <ImageSlider
      selectedMaterialId={product.materials[0].id}
      materials={product.materials}
      zoomedIn={false}
    />
  ))
