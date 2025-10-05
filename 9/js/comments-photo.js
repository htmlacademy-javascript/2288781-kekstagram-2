import { COMMENTS, AVATARS, MESSAGES, NAMES } from './data.js';
import { getRandomInteger } from './utils.js';
import { getRandomElements } from './utils.js';
import { generateCommentsId } from './get-id.js';

/** Функция для создания комментария к фото
  * @param {int} id - идентификатор комментария
  * @param {string} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {string} message - сам комментарий
  * @param {string} name - имя комментатора
  * @param {Array} return arrayComments[] - возвращает массив комментариев
  *
*/
const generateCommentsPhoto = () => {
  const arrayComments = [];
  for (let i = 0; i < getRandomInteger(COMMENTS.MIN, COMMENTS.MAX); i++) {
    arrayComments.push({
      id: generateCommentsId(),
      avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
      message: getRandomElements(MESSAGES),
      name: getRandomElements(NAMES),
    });
  }
  return arrayComments;
};

export { generateCommentsPhoto };
