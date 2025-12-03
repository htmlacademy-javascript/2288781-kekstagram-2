// МОДУЛЬ С КОНСТАНТАМИ, СВЯЗАННЫМИ С ДАННЫМИ ПОЛНОРАЗМЕРНЫХ ИЗОБРАЖЕНИЙ

const isBody = document.body;

const bigPicture = document.querySelector('.big-picture');
const bigImage = document.querySelector('.big-picture__img img');
const bigImageLikes = document.querySelector('.likes-count');

const commentList = document.querySelector('.social__comments');
const bigImageCaption = document.querySelector('.social__caption');
const bigImageShownComments = document.querySelector('.social__comment-shown-count');
const bigImageTotalComment = document.querySelector('.social__comment-count');
const bigImageLoader = document.querySelector('.comments-loader');

const bigImageButtonClose = bigPicture.querySelector('.big-picture__cancel');

export {
  isBody,
  bigPicture,
  bigImage,
  bigImageLikes,
  commentList,
  bigImageCaption,
  bigImageShownComments,
  bigImageTotalComment,
  bigImageLoader,
  bigImageButtonClose
};
