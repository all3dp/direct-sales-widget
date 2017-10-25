import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import WidgetLayout from 'Component/widget-layout'
import WidgetHeader from 'Component/widget-header'
import WidgetFooter from 'Component/widget-footer'
import AddressOverlay from 'Component/address-overlay'
import CheckoutOverlay from 'Component/checkout-overlay'

import product from '../../test-data/mock/object.json'

const sliderProps = {
  materials: product.materials,
  selectedMaterialId: product.materials[0].id
}

storiesOf('Widget Layout', module)
  .add('default', () => (
    <WidgetLayout backgroundImage="http://placehold.it/320x280" />
  ))
  .add('display', () => (
    <WidgetLayout {...sliderProps} >
      <WidgetHeader title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetLayout>
  ))
  .add('display zoomed', () => (
    <WidgetLayout {...sliderProps} >
      <WidgetHeader hidden title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        zoomedIn
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetLayout>
  ))
  .add('disabled footer', () => (
    <WidgetLayout {...sliderProps} >
      <WidgetHeader hidden title="Raspberry Pi Case" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum." />
      <WidgetFooter
        disabled
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetLayout>
  ))
  .add('Shipping Address', () => (
    <WidgetLayout {...sliderProps} >
      <AddressOverlay />
      <WidgetFooter
        modifiers={['thick-background']}
        disabled
        material={'PREMIUM PLASTIC "white"'}
        buttonLabel="$32,50 BUY"
        handleButtonClick={action('click')}
        handleChangeMaterialLeft={action('click')}
        handleChangeMaterialRight={action('click')}
        handleToggleZoom={action('click')}
      />
    </WidgetLayout>
  ))
  .add('Checkout', () => (
    <WidgetLayout {...sliderProps} >
      <CheckoutOverlay
        objectTitle="Raspberry Pi Case"
        objectPrice={13.50}
        shippingPrice={6.50}
        vatPrice={2.58}
        totalPrice={45.08}
      />
    </WidgetLayout>
  ))
