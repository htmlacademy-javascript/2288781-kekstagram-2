import {
  effectLevelSliderParrent,
  effectLevelSlider,
  effectValue,
  effectChecked,
  uploadPreviewImage,
  EFFECTS,
  DATA_EFFECTS
} from '../image-editing/image-editing-data.js';

// Когда слайдер движется, то меняется фильтр на изображении и значение в скрытом поле
const sliderVisableToggle = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

// Поиск эффекта по имени
const searchEffect = (value, array) => array.find((element) => element.name === value);

// Инициализация слайдера noUiSlider
noUiSlider.create(effectLevelSlider, {
  start: DATA_EFFECTS.DEFAULT_START,
  connect: 'lower',
  range: {
    min: DATA_EFFECTS.DEFAULT_MIN,
    max: DATA_EFFECTS.DEFAULT_MAX,
  }
});

// Обновление настроек слайдера в зависимости от выбранного эффекта
const sliderUpdateOptions = (value) => {
  const effect = searchEffect(value, EFFECTS); // поиск эффекта по имени
  // Если эффект не найден, скрыть слайдер и убрать фильтр
  if (!effect) {
    sliderVisableToggle(); // скрыть слайдер
    uploadPreviewImage.style.removeProperty('filter'); // убрать фильтр с изображения
    return;
  }

  // Обновление настроек слайдера
  const { min, max, start, step, unit } = effect; // деструктуризация параметров эффекта
  sliderVisableToggle(false); // показать слайдер
  // Обновление опций слайдера
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step
  });

  // Обработчик события обновления слайдера
  effectLevelSlider.noUiSlider.on('update', () => {
    const effectLevelInputValue = effectLevelSlider.noUiSlider.get(); // получение текущего значения слайдера
    effectValue.value = effectLevelInputValue; // обновление скрытого поля
    uploadPreviewImage.style.filter = `${effect.style}(${effectLevelInputValue}${unit})`; // применение фильтра к изображению
  });
};

// Слушатель изменения выбранного эффекта
export const effectCheckedListener = () => {
  // Слушатель изменения выбранного эффекта
  effectChecked.addEventListener('change', (evt) => {
    // Если выбран эффект, обновить настройки слайдера
    if (evt.target.checked) {
      sliderUpdateOptions(evt.target.value); // обновление слайдера в зависимости от выбранного эффекта
    }
  });
};

// Сброс эффектов к исходному состоянию
export const resetEffects = () => {
  effectLevelSlider.noUiSlider.set(DATA_EFFECTS.DEFAULT_MAX); // сброс слайдера к максимальному значению
  uploadPreviewImage.style.filter = ''; // удаление фильтра с изображения
  uploadPreviewImage.classList.add('effects__preview--none'); // добавление класса для эффекта "оригинал"
  effectValue.value = 100; // сброс значения скрытого поля к 100
  sliderVisableToggle(); // скрытие слайдера
};

effectCheckedListener();
resetEffects();
