import { getDataArrays } from '/js/data.js';
import { getRandomInteger, createIdGenerator } from '/js/utils.js';

/**
 * Деструктуризация импортированных данных
 */
const { COMMENTS, AVATARS, LIKES } = getDataArrays();

const generateCommentsId = createIdGenerator(COMMENTS.MIN, COMMENTS.MAX);
const generateAvatarId = createIdGenerator(AVATARS.MIN, AVATARS.MAX);
const generateLikesId = createIdGenerator(LIKES.MIN, LIKES.MAX);
const generatePhotoId = createIdGenerator();
const generatePhotoUrl = getRandomInteger();

export {
  generatePhotoId,
  generatePhotoUrl,
  generateCommentsId,
  generateAvatarId,
  generateLikesId
};
