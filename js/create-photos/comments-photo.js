import { getDataArrays } from '../data.js';
import { getRandomElements, getRandomInteger } from '../utils.js';
import { COMMENTS } from '../create-photos/get-id.js';

/**
 * Деструктуризация импортированных данных
 */
const { MESSAGES, NAMES } = getDataArrays();

/** Функция, которая создает комментарии к фотографиям
  * @param {*} id - идентификатор комментария
  * @param {*} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {*} message - сам комментарий
  * @param {*} name - имя комментатора
  * @param {Array} return getComment - возвращает массив комментариев
  *
*/
const createComments = () => {
  let id = 1;
  return () => {
    const getComment = [];
    getComment.id = id;
    getComment.avatar = `img/avatar-${getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)}.svg`;
    getComment.message = `${getRandomElements(MESSAGES)}`;
    getComment.name = `${getRandomElements(NAMES)}`;
    id++;
    return getComment;
  };
};

export { createComments };
