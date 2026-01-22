import {
  EFFECTS,
  DATA_EFFECTS,
  effectLevelSliderParrent,
  effectLevelSlider,
  effectValue,
  effectChecked,
  uploadPreviewImage
} from '../image-editing/image-editing-data.js';

const toggleSliderVisable = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

const searchEffect = (value, effects) => effects.find((element) => element.name === value);

noUiSlider.create(effectLevelSlider, {
  start: DATA_EFFECTS.DEFAULT_START,
  connect: 'lower',
  range: {
    min: DATA_EFFECTS.DEFAULT_MIN,
    max: DATA_EFFECTS.DEFAULT_MAX,
  },
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSliderOptions = (value) => {
  const effect = searchEffect(value, EFFECTS);
  if (!effect) {
    toggleSliderVisable();
    uploadPreviewImage
      .style
      .removeProperty('filter');
    return;
  }

  const { min, max, start, step, unit } = effect;
  toggleSliderVisable(false);
  effectLevelSlider
    .noUiSlider
    .updateOptions({
      start: start,
      step: step,
      range: {
        min: min,
        max: max,
      },
      format: {
        to: function (valueEffect) {
          return parseFloat(valueEffect);
        },
        from: function (valueEffect) {
          return parseFloat(valueEffect);
        },
      },
    });

  effectLevelSlider
    .noUiSlider
    .on('update', () => {
      const effectLevelInputValue = effectLevelSlider
        .noUiSlider
        .get();
      effectValue.value = effectLevelInputValue;
      uploadPreviewImage
        .style
        .filter = `${effect.style}(${effectLevelInputValue}${unit})`;
    });
};

effectChecked.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateSliderOptions(evt.target.value);
  }
});

export const resetEffects = () => {
  effectLevelSlider
    .noUiSlider
    .set(DATA_EFFECTS.DEFAULT_MAX);
  uploadPreviewImage
    .style
    .filter = '';
  uploadPreviewImage
    .classList
    .add('effects__preview--none');
  effectValue
    .value = 100;
  toggleSliderVisable();
};

resetEffects();
