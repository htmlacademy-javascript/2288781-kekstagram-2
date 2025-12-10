import { getDataArrays } from '../data.js';
import { getRandomInteger, getRandomElements } from '../utils';
import { generateCommentsId } from '../create-photos/get-id.js';

// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА СОЗДАНИЕ МАССИВА И ЗАПОЛНЕНИЕ ЕГО КОММЕНАТРИЯМИ

/**
 * Деструктуризация импортированных данных
 */
const { AVATARS, MESSAGES, NAMES } = getDataArrays();

/** Функция, которая создает случайный комментарии с уникальным ID случайным аватаром со случайным текстом и именем к фотографиям
  * @param {*} id - идентификатор комментария
  * @param {*} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {*} message - сам комментарий
  * @param {*} name - имя комментатора
*/
export const createComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
  message: getRandomElements(MESSAGES),
  name: getRandomElements(NAMES),
});
