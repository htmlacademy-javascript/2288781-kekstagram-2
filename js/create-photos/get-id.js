import { createRandomIntegerFromRangeGenerator, createIdGenerator } from '../utils.js';
import { getDataArrays } from '../data.js';

/**
 * Деструктуризация импортированных данных
 */
const { MAX_PHOTOS } = getDataArrays();

/**
 * Генерация id
 */
const photoId = createIdGenerator();
const photoUrl = createIdGenerator();
const commentsId = createRandomIntegerFromRangeGenerator(1, MAX_PHOTOS);

export {
  photoId,
  photoUrl,
  commentsId
};
