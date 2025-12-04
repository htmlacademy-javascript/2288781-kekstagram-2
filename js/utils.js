// МОДУЛЬ С ВСПОМОГАТЕЛЬНЫМИ ФУНКЦИЯМИ

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
 * Функция получения уникального случайного идентификатора
 * @param {*} min
 * @param {*} max
 * @returns
 */
export const createRandomIntegerFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
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
 * Функция проверки нажатой клавиши Esc
 * @param {*} evt
 * @returns
 */
export const isEscapeKeydown = (evt) => evt.key === 'Escape';
