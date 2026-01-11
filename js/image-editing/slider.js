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


/**
 * + С помощью библиотеки noUiSlider (скрипт и стили находятся в директории /vendor/nouislider)
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
