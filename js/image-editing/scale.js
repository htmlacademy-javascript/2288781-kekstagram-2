import {
  SCALE_FACTOR,
  DATA_IMAGE_EDITING,
  scaleControlSmaller,
  scaleControlBigger,
  scaleControlValue,
  uploadPreviewImage
} from './image-editing-data.js';

const setScaleValue = (value) => {
  scaleControlValue.value = `${value}%`;
  const scale = value * SCALE_FACTOR;
  uploadPreviewImage.style.transform = `scale(${scale})`;
};

scaleControlSmaller.addEventListener('click', () => {
  let currentScale = parseInt(scaleControlValue.value, 10);
  if (currentScale > DATA_IMAGE_EDITING.MIN_SCALE) {
    currentScale -= DATA_IMAGE_EDITING.STEP_SCALE;
    setScaleValue(currentScale);
  }
});

scaleControlBigger.addEventListener('click', () => {
  let currentScale = parseInt(scaleControlValue.value, 10);
  if (currentScale < DATA_IMAGE_EDITING.MAX_SCALE) {
    currentScale += DATA_IMAGE_EDITING.STEP_SCALE;
    setScaleValue(currentScale);
  }
});

export const resetScale = () => {
  setScaleValue(DATA_IMAGE_EDITING.MAX_SCALE);
};

resetScale();
