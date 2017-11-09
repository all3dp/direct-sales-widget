import {handleActions} from 'redux-actions'

import TYPE from '../action-type'

const initialState = {
  backgroundImageZoomed: false,
  descriptionExpanded: false
}

function handleBackgroundImageZoomToggled (state) {
  return {
    ...state,
    backgroundImageZoomed: !state.backgroundImageZoomed
  }
}

function handleDescriptionToggled (state) {
  return {
    ...state,
    descriptionExpanded: !state.descriptionExpanded
  }
}

export default handleActions({
  [TYPE.DISPLAY.TOGGLE_BACKGROUND_IMAGE_ZOOM]: handleBackgroundImageZoomToggled,
  [TYPE.DISPLAY.TOGGLE_DESCRIPTION]: handleDescriptionToggled
}, initialState)
