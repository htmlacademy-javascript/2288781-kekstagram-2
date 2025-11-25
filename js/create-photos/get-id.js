import { getDataArrays } from '/js/data.js';
import { createIdGenerator } from '/js/utils.js';

/**
 * Деструктуризация импортированных данных
 */
export const { COMMENTS, AVATARS, LIKES } = getDataArrays();

const generatePhotoId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

export {
  generatePhotoId,
  generatePhotoUrl,
};
