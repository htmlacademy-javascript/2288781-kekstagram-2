const scaleControlSmaller = document.querySelector('.scale__control--smaller'); // кнопка уменьшения масштаба
const scaleControlBigger = document.querySelector('.scale__control--bigger'); // кнопка увеличения масштаба
const scaleControlValue = document.querySelector('.scale__control--value'); // поле значения масштаба
const uploadPreviewImage = document.querySelector('.img-upload__preview img'); // изображение для редактирования

const effectLevelSliderParrent = document.querySelector('.img-upload__effect-level'); // родитель слайдера эффектов
const effectLevelSlider = document.querySelector('.effect-level__slider'); // слайдер эффектов
const effectValue = document.querySelector('.effect-level__value'); // скрытое поле для значения эффекта
const effectChecked = document.querySelector('.effects'); // контейнер с радиокнопками эффектов

const EFFECTS = [
  {
    name: 'original',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    start: 0,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3,
    unit: '',
  },
];

// Эффект по умолчанию
const defaultEffect = EFFECTS.find((effect) => effect.name === 'none');

// Константы для масштабирования изображения
const DATA_IMAGE_EDITING = {
  STEP_SCALE: 25,
  MIN_SCALE: 25,
  MAX_SCALE: 100
};

// Константы для эффектов изображения
const DATA_EFFECTS = {
  DEFAULT_MIN: 0,
  DEFAULT_MAX: 100,
  DEFAULT_START: 0
};

export {
  scaleControlSmaller,
  scaleControlBigger,
  scaleControlValue,
  uploadPreviewImage,

  effectLevelSliderParrent,
  effectLevelSlider,
  effectValue,
  effectChecked,

  defaultEffect,

  EFFECTS,

  DATA_IMAGE_EDITING,
  DATA_EFFECTS
};
