import { createIdGenerator } from '../utils.js';

// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ГЕНЕРАЦИЮ ИНДЕНТИФИКАТОРА

const generatePhotoId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();
const generateCommentsId = createIdGenerator();
const generateAvatarsId = createIdGenerator();
const generateLikesId = createIdGenerator();

export {
  generatePhotoId,
  generatePhotoUrl,
  generateCommentsId,
  generateAvatarsId,
  generateLikesId
};
