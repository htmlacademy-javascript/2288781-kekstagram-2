import { getDataArrays } from '../data.js';
import { getRandomInteger, getRandomElements } from '../utils.js';
import { generatePhotoId, generatePhotoUrl } from '/js/create-photos/get-id.js';
import { generateComment } from '/js/create-photos/comments-photo.js';

/**
 * Деструктуризация импортированных данных
 */
const { DESCRIPTIONS, LIKES, MAX_PHOTOS } = getDataArrays();

/**
  * Функция для создания объекта с описанием фотографии
  * @param {number} id - идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться
  * @param {string} url - строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться
  * @param {string} description - строка — описание фотографии. Описание придумайте самостоятельно
  * @param {number} likes - количество лайков
  * @param {*} comments - массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом
  * @returns
*/
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: generateComment()
});

/**
 * Функция для создания массива объектов длиной MAX_PHOTOS с описанием фотографий
*/
export const getAllPhotoUsers = () => Array.from({ length: MAX_PHOTOS }, createPhoto);
