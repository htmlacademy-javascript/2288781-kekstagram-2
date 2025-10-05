import { getIdGenerator } from './utils.js';

/** Функция присвоения индентификатора - id
 * для фотографии
 * для URL - адрес будет отличаться только числом
 * для комментариев
*/
const generatePhotoId = getIdGenerator();
const generatePhotoUrl = getIdGenerator();
const generateCommentsId = getIdGenerator();

export { generatePhotoId, generatePhotoUrl, generateCommentsId };
