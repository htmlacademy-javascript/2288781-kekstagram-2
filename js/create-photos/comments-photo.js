import { getDataArrays } from '../data.js';
import { getRandomInteger, getRandomElements } from '../utils';
import { commentsId } from '/js/create-photos/get-id.js';

/**
 * Деструктуризация импортированных данных
 */
const { AVATARS, MESSAGES, NAMES, COMMENTS } = getDataArrays();

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomElements(MESSAGES)).join(' ');

/** Функция, которая создает комментарии к фотографиям
  * @param {*} id - идентификатор комментария
  * @param {*} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {*} message - сам комментарий
  * @param {*} name - имя комментатора
  * @param {Array} return createComments - возвращает массив комментариев
  *
*/
const createComments = () => ({
  id: commentsId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
  message: createMessage(),
  name: getRandomElements(NAMES),
});

const generateComment = () => Array.from({ length: getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)}, createComments);

export { createComments, generateComment };
