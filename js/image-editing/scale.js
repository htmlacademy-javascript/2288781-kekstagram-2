import {
  scaleControlSmaller,
  scaleControlBigger,
  scaleControlValue,
  uploadPreviewImage,
  DATA_IMAGE_EDITING
} from './image-editing-data.js';

// Функция установки значения масштаба и применения его к изображению
const setScaleValue = (value) => {
  scaleControlValue.value = `${value}%`;
  const scale = value / 100;
  uploadPreviewImage.style.transform = `scale(${scale})`;
};

// Функция-слушатель для кнопок изменения масштаба
export const scaleListener = () => {
  // Обработчики событий для кнопок изменения масштаба - уменьшение
  scaleControlSmaller.addEventListener('click', () => {
    let currentScale = parseInt(scaleControlValue.value, 10);
    if (currentScale > DATA_IMAGE_EDITING.MIN_SCALE) {
      currentScale -= DATA_IMAGE_EDITING.STEP_SCALE;
      setScaleValue(currentScale);
    }
  });

  // Обработчики событий для кнопок изменения масштаба - увеличение
  scaleControlBigger.addEventListener('click', () => {
    let currentScale = parseInt(scaleControlValue.value, 10);
    if (currentScale < DATA_IMAGE_EDITING.MAX_SCALE) {
      currentScale += DATA_IMAGE_EDITING.STEP_SCALE;
      setScaleValue(currentScale);
    }
  });
};

// Функция сброса масштаба к значению по умолчанию
export const resetScale = () => {
  setScaleValue(100);
};

scaleListener();
resetScale();
