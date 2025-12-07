// МОДУЛЬ С КОНСТАНТАМИ, СВЯЗАННЫМИ С ДАННЫМИ ПОЛНОРАЗМЕРНЫХ ИЗОБРАЖЕНИЙ

const isBody = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = bigPicture.querySelector('.big-picture__cancel');

const bigImage = document.querySelector('.big-picture__img img');
const bigImageLikes = document.querySelector('.likes-count');

const commentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const bigImageCaption = document.querySelector('.social__caption');
const bigImageShownCommentsCount = document.querySelector('.social__comment-shown-count');
const bigImageTotalCommentsCount = document.querySelector('.social__comment-total-count');


const bigImageLoader = document.querySelector('.comments-loader');

const COMMENTS_LIMIT = 5;
const currentComments = [];

export {
  isBody,
  bigPicture,
  bigPictureButtonClose,
  bigImage,
  bigImageLikes,
  commentsList,
  socialComment,
  bigImageCaption,
  bigImageShownCommentsCount,
  bigImageTotalCommentsCount,
  bigImageLoader,
  COMMENTS_LIMIT,
  currentComments
};
