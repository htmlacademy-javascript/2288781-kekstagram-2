import { getIdGenerator } from './utils.js';

/** Функция присвоения индентификатора - id
 * для фотографии
 * для комментариев
*/
const generatePhotoId = getIdGenerator();
const generateCommentsId = getIdGenerator();

export { generatePhotoId, generateCommentsId };
