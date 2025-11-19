// модуль с вспомогательными функциями

/**
 * Функция для генерации случайного числа в диапозоне от а до b
 * @param {number} a - нижняя граница диапазона,
 * @param {number} b - верхняя граница диапазона,
 * @returns {Array} result - возвращает случайное число в диапазоне от a до b,
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b)); // округляет в большую сторону
  const upper = Math.floor(Math.max(a, b)); // округляет в меньшую сторону
  // исключаем повторение значения в следующих вызовах для комментариев
  const result = Math.random() * (upper - lower + 1) + lower; // подставляем следующий
  return Math.floor(result);
};

/** Функция для генерации случайного элемента массива
 * @param {Array} elements - сам массив элементов
 * @param {*} result - элемент массива - element
 */
const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/** Функция для генерации идентификатора - id
 * идентификаторы не должны повторяться
 * id - это число от 1 до 25
 * @param {number} result - число — идентификатор опубликованной фотографии
 */
const getIdGenerator = () => {
  let firstGenerateId = 0;
  return function () {
    firstGenerateId += 1;
    return firstGenerateId;
  };
};

export { getRandomInteger, getRandomElements, getIdGenerator };
