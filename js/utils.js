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
 * Функция для генерации случайного элемента массива
 * @param {Array} elements - массив элементов
 * @returns elements
 */
export const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**
 * Функция получения уникального идентификатора (автоинкремент) опубликованной фотографии
 * идентификаторы не должны повторяться
 * id - это число от 1 до 25
 * @param {number} start
 * @returns lastGenerationId
 */
export const createIdGenerator = (start = 0) => {
  let lastGeneratedId = start;
  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
