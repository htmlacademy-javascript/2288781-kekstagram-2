const DEBOUNCE_DELAY = 500;

/**
 * Функция для генерации случайного числа в диапозоне от а до b
 * @param {number} a - нижняя граница диапазона,
 * @param {number} b - верхняя граница диапазона,
 * @returns {Array} result - возвращает случайное число в диапазоне от a до b,
 */
export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b)); // округляет в большую сторону
  const upper = Math.floor(Math.max(a, b)); // округляет в меньшую сторону
  // исключаем повторение значения в следующих вызовах для комментариев
  const result = Math.random() * (upper - lower + 1) + lower; // подставляет следующий
  return Math.floor(result);
};

/**
 * Функция получения случайного элемента массива
 * @param {*} elements
 * @returns
 */
export const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**
 * Функция получения уникального идентификатора
 * @param {*} start
 * @returns
 */
export const createIdGenerator = (start = 0) => {
  let lastGeneratedId = start;
  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

/**
 * Функция-переключатель
 * @param {*} element
 * @param {*} className
 */
export const toggleClass = (element, className = '') => {
  if (element) {
    element.classList.toggle(className);
  }
};

/**
 * Функция проверки нажатой клавиши Esc - кнопка с крестиком, кнопка закрытия
 * @param {*} evt
 * @returns
 */
export const isEscapeKeydown = (evt) => evt.key === 'Escape';

/**
 * Функция debounce для устранения дребезга
 * Функция взята из интернета и доработана
 * Источник - https://www.freecodecamp.org/news/javascript-debounce-example
 * @param {*} callback
 * @param {*} timeoutDelay
 * @returns
 */
export const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};


/**
 * Функция throttle для пропуска кадров
 * // Функция взята из интернета и доработана
 * // Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle
 * @param {*} callback
 * @param {*} delayBetweenFrames
 * @returns
 */

export const throttle = (callback, delayBetweenFrames) => {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};
