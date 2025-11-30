import { getDataArrays } from '../data.js';
import { getRandomInteger, getRandomElements } from '../utils';
import { generateCommentsId } from '/js/create-photos/get-id.js';

/**
 * Деструктуризация импортированных данных
 */
const { COMMENTS, AVATARS, MESSAGES, NAMES } = getDataArrays();

/** Функция, которая создает комментарии к фотографиям
  * @param {*} id - идентификатор комментария
  * @param {*} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {*} message - сам комментарий
  * @param {*} name - имя комментатора
  * @param {Array} return createComments - возвращает массив комментариев
  *
*/
const createComments = () => {
  const arrayComments = [];
  for (let i = 0; i < getRandomInteger(COMMENTS.MIN, COMMENTS.MAX); i++) {
    arrayComments.push({
      id: generateCommentsId(),
      avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
      message: getRandomElements(MESSAGES),
      name: getRandomElements(NAMES),
    });
  }
  return createComments;
};

export { createComments };
