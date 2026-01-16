import {
  effectLevelSliderParrent,
  effectLevelSlider,
  effectValue,
  effectChecked,
  uploadPreviewImage,
  EFFECTS,
  DATA_EFFECTS
} from '../image-editing/image-editing-data.js';


const sliderVisableToggle = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

const searchEffect = (value, array) => array.find((element) => element.name === value);

noUiSlider.create(effectLevelSlider, {
  start: DATA_EFFECTS.DEFAULT_START,
  connect: 'lower',
  range: {
    min: DATA_EFFECTS.DEFAULT_MIN,
    max: DATA_EFFECTS.DEFAULT_MAX,
  }
});

const sliderUpdateOptions = (value) => {
  const effect = searchEffect(value, EFFECTS);
  if (!effect) {
    sliderVisableToggle();
    uploadPreviewImage.style.removeProperty('filter');
    return;
  }

  const { min, max, start, step, unit } = effect;
  sliderVisableToggle(false);
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    const effectLevelInputValue = effectLevelSlider.noUiSlider.get();
    effectValue.value = effectLevelInputValue;
    uploadPreviewImage.style.filter = `${effect.style}(${effectLevelInputValue}${unit})`;
  });
};

export const effectCheckedListener = () => {
  effectChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderUpdateOptions(evt.target.value);
    }
  });
};

export const resetEffects = () => {
  effectLevelSlider.noUiSlider.set(DATA_EFFECTS.DEFAULT_MAX);
  uploadPreviewImage.style.filter = '';
  uploadPreviewImage.classList.add('effects__preview--none');
  effectValue.value = 100;
  sliderVisableToggle();
};

effectCheckedListener();
resetEffects();
