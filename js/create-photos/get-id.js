import { getDataArrays } from '../data.js';
import { createIdGenerator } from '../utils.js';

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
