/* eslint-disable no-console */


// точка входа - модуль, который связывает другие модули

import { MAX_PHOTOS, LIKES, DESCRIPTIONS } from './data.js';
import { getRandomInteger } from './utils.js';
import { getRandomElements } from './utils.js';
import { generatePhotoId, generatePhotoUrl } from './get-id.js';
import { generateCommentsPhoto } from './comments-photo.js';


/** Функция для создания объекта с описанием фотографии
  * @param {int} id - идентификатор фотографии
  * @param {string} url - ссылка на фотографию
  * @param {string} description - описание фотографии
  * @param {int} likes - количество лайков
  * @param {Array} generateCommentsToPhoto() - массив комментариев
 * Структура каждого объекта должна быть следующей:
   - id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
   - url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
   - description, строка — описание фотографии. Описание придумайте самостоятельно.
   - comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
*/
const getPhotoUsers = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: generateCommentsPhoto(),
});


/** Функция для создания массива объектов длиной PHOTOS с описанием фотографий
*/
const getAllPhotoUsers = () => Array.from({ length: MAX_PHOTOS }, getPhotoUsers);


console.log(getAllPhotoUsers());

