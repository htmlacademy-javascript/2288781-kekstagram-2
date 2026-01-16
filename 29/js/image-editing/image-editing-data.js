const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');

const effectLevelSliderParrent = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectChecked = document.querySelector('.effects');

const SCALE_FACTOR = 0.01;

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

const defaultEffect = EFFECTS.find((effect) => effect.name === 'none');

const DATA_IMAGE_EDITING = {
  STEP_SCALE: 25,
  MIN_SCALE: 25,
  MAX_SCALE: 100
};

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

  SCALE_FACTOR,

  EFFECTS,

  DATA_IMAGE_EDITING,
  DATA_EFFECTS
};
