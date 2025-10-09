// модуль с вспомогательными функциями

/**
 * Функция для генерации случайного числа в диапозоне от а до b
 * @param {int} a - нижняя граница диапазона,
 * @param {int} b - верхняя граница диапазона,
 * @returns {int} result - возвращает случайное число в диапазоне от a до b,
 */
export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b)); // округляет в большую сторону
  const upper = Math.floor(Math.max(a, b)); // округляет в меньшую сторону
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/** Функция для генерации случайного элемента массива
 * @param {int} element - сам массив
 * @param {string} result - элемент массива - element
 */
export const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/** Функция для генерации идентификатора - id
 * идентификаторы не должны повторяться
 * id - это число от 1 до 25
 * @param {int} result - число — идентификатор опубликованной фотографии
 */
export const getIdGenerator = () => {
  let firstGenerateId = 0;
  return function () {
    firstGenerateId += 1;
    return firstGenerateId;
  };
};
