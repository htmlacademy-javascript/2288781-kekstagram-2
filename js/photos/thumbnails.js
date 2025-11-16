import { IS_PHOTOS } from './photos/thumbnails.js';

const TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
const PHOTO = IS_PHOTOS[0];
const IMAGE = TEMPLATE.querySelector('.picture__img');
const CONTAINER = document.querySelector('.pictures');

IMAGE.src = PHOTO.url;
IMAGE.alt = PHOTO.description;

TEMPLATE.querySelector('.picture__comments').textContent = PHOTO.comments.length;
TEMPLATE.querySelector('.picture__likes').textContent = PHOTO.likes;

CONTAINER.appendChild(TEMPLATE);
