// МОДУЛЬ С КОНСТАНТАМИ, СВЯЗАННЫМИ С ДАННЫМИ ПОЛНОРАЗМЕРНЫХ ИЗОБРАЖЕНИЙ

const isBody = document.body;

const bigPicture = document.querySelector('.big-picture');
const bigImageButtonClose = bigPicture.querySelector('.big-picture__cancel');
const bigImage = document.querySelector('.big-picture__img img');

const socialPicture = document.querySelector('.social__picture');
const socialCaption = document.querySelector('.social__caption');
const socialLikes = document.querySelector('.social__likes');
const likesCount = document.querySelector('.likes-count');

const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialText = document.querySelector('.social__text');
const commentsLoader = document.querySelector('.comments-loader');

export {
  isBody,
  bigPicture,
  bigImageButtonClose,
  bigImage,
  socialPicture,
  socialCaption,
  socialLikes,
  likesCount,
  socialCommentCount,
  socialCommentShownCount,
  socialCommentTotalCount,
  socialComments,
  socialComment,
  socialText,
  commentsLoader
};
