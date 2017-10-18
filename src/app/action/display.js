import {createAction} from 'redux-actions'

import TYPE from '../type'

export const toggleDescription = createAction(
  TYPE.DISPLAY.TOGGLE_DESCRIPTION
)

export const toggleBackgroundImageZoom = createAction(
  TYPE.DISPLAY.TOGGLE_BACKGROUND_IMAGE_ZOOM
)
