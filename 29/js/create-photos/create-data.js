import {
  getRandomInteger,
  getRandomElements,
  createIdGenerator
} from '../utils.js';
import {
  createComments
} from '../create-photos/comments-photo.js';


const MAX_PHOTOS = 25;

const generatePhotoId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

const getPhotoUsers = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomElements(),
  likes: getRandomInteger(),
  comments: Array.from({ length: getRandomInteger() }, createComments),
});

const getAllPhotoUsers = () => Array.from({ length: MAX_PHOTOS }, getPhotoUsers);

const pictureTemplateFragment = document.querySelector('#picture').content;
const pictureTemplate = pictureTemplateFragment.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

export {
  getAllPhotoUsers,
  pictureTemplate,
  picturesContainer
};
