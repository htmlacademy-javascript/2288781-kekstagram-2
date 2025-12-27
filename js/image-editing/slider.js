import {
  effectLevelSliderParrent,
  effectLevelSlider,
  effectLevelInput,
  effectChecked,
  uploaPreviewImage,
  EFFECTS,
  DATA_EFFECTS } from '../image-editing/image-editing-data.js';

const sliderVisableToggle = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

const searhEffect = (value, array) => array.find((element) => element.name === value);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DATA_EFFECTS.DEFAULT_MIN,
    max: DATA_EFFECTS.DEFAULT_MAX,
  },
  start: DATA_EFFECTS.DEFAULT_START,
  connect: 'lower'
});

const sliderUpdateOptions = (value) => {
  const effect = searhEffect(value, EFFECTS);
  if(!effect){
    sliderVisableToggle();
    uploaPreviewImage.style.removeProperty('filter');
    return;
  }
  const {min, max, start, step, unit} = effect;
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
    effectLevelInput.value = effectLevelInputValue;
    uploaPreviewImage.style.filter = `${effect.style}(${effectLevelInputValue}${unit})`;
  });
};

export const effectCheckedListener = () => {
  effectChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderUpdateOptions(evt.target.value);
    }
  });
};


/**
 * С помощью библиотеки noUiSlider (скрипт и стили находятся в директории /vendor/nouislider)
 * реализуйте применение эффекта для изображения.
 * Кроме визуального применения эффекта необходимо записывать значение
 * в скрытое поле для дальнейшей отправки на сервер.
 *
 * !!! Обратите внимание, что при переключении фильтра, уровень эффекта
 * должен сразу сбрасываться до начального состояния,
 * т. е. логика по определению уровня насыщенности должна срабатывать
 * не только при «перемещении» слайдера, но и при переключении фильтров.
 *
 * 2.2. Наложение эффекта на изображение:
        По умолчанию должен быть выбран эффект «Оригинал».
        На изображение может накладываться только один эффект.
        Интенсивность эффекта регулируется перемещением ползунка в слайдере.
         Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider.
         Уровень эффекта записывается в поле .effect-level__value в виде числа.
         При изменении уровня интенсивности эффекта (предоставляется API слайдера),
         CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
            Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
            Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
            Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
            Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
            Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
            Для эффекта «Оригинал» CSS-стили filter удаляются.
        При выборе эффекта «Оригинал» слайдер и его контейнер (элемент .img-upload__effect-level) скрываются.
        При переключении эффектов, уровень насыщенности сбрасывается
        до начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.

 */
