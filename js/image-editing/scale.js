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


/**
 *   Реализацию сценария загрузки изображения и его редактирования на примере заглушки
 *
 * - Написать код, который позволит пользователю редактировать масштаб изображения.
 * - Кроме визуального применения эффекта необходимо записывать значение в поле формы с масштабом,
 *   доступное только для чтения, для дальнейшей отправки на сервер:
      2.1. Масштаб:
      + При нажатии на кнопки .scale__control--smaller и .scale__control--bigger
      + должно изменяться значение поля .scale__control--value;
      + Значение должно изменяться с шагом в 25.
         Например, если значение поля установлено в 50%, после нажатия на «+»,
         значение должно стать равным 75%.
      + Максимальное значение — 100%, минимальное — 25%.
      + Значение по умолчанию — 100%;
      + При изменении значения поля .scale__control--value изображению
        внутри .img-upload__preview должен добавляться соответствующий стиль CSS,
        который с помощью трансформации scale задаёт масштаб.
         Например, если в поле стоит значение 75%, то в стиле изображения
         должно быть написано transform: scale(0.75)
 */
