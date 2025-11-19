import { getRandomInteger, getRandomElements } from './utils.js';
import { getDataArrays } from './data.js';
import { generatePhotoId } from './create-photos/create-id.js';
import { getAllComments } from './create-photos/comments-photo.js';

/**
 * Деструктуризация импортированных данных
 */
const { MAX_PHOTOS, LIKES, DESCRIPTIONS, NAMES, MESSAGES } = getDataArrays();

/** Функция для создания объекта с описанием фотографии
  * @param {number} id - идентификатор фотографии
  * @param {string} url - ссылка на фотографию
  * @param {string} description - описание фотографии
  * @param {number} likes - количество лайков
  * @param {int} getAllComments() - массив комментариев
  * @param {Array} getPhoto
 * Структура каждого объекта должна быть следующей:
   - id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
   - url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25, i = getId. Адреса картинок не должны повторяться.
   - description, строка — описание фотографии. Описание придумайте самостоятельно.
   - likes
   - comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
*/
const getPhotoUsers = () => {
  const getId = generatePhotoId();
  const getPhoto = {
    id: getId,
    url: `photos/${getId}.jpg`,
    description: getRandomElements(DESCRIPTIONS[getId - 1]),
    likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
    comments: getAllComments(NAMES, MESSAGES, getId),
  };
  return getPhoto;
};

/** Функция для создания массива объектов длиной PHOTOS с описанием фотографий
*/
export const getAllPhotoUsers = () => Array.from({ length: MAX_PHOTOS }, getPhotoUsers);
