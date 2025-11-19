import { getDataArrays } from './data.js';
import { getRandomInteger, getRandomElements } from './utils.js';
import { generateCommentsId } from './create-photos/create-id.js';

export const getAllComments = () => {
  /**
   * Деструктуризация импортированных данных
   */
  const { COMMENTS, AVATARS, MESSAGES, NAMES } = getDataArrays();

  /** Функция для создания комментария к фото
    * @param {number} id - идентификатор комментария
    * @param {string} avatar - это строка, где значение которой формируется по правилу: img/avatar-{{случайное число от 1 до 6}}.svg
    * @param {string} message - сам комментарий
    * @param {string} name - имя комментатора
    * @param {Array} return arrayComments[] - возвращает массив комментариев
    *
  */
  const generateCommentsPhoto = () => {
    const comments = [];
    const commentsNumber = getRandomInteger(COMMENTS.MIN, COMMENTS.MAX);
    for (let i = 0; i < commentsNumber; i++) {
      const comment = {
        id: generateCommentsId(),
        avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
        message: getRandomElements(MESSAGES),
        name: getRandomElements(NAMES),
      };
      comments.push(comment);
    }
    return comments;
  };

  return { generateCommentsPhoto };
};
