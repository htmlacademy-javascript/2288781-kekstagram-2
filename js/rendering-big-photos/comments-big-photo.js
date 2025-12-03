import { socialComments, socialComment, socialPicture, socialText } from '/js/rendering-big-photos/const-big-photos.js';

// const arrayComments = [];
// const LIMITED_DISPLAY_COMMENTS = 5;

/**
* 1. Шаблон комментария
* @param {Object} comment - объект с одним комментарием
* @returns {Element}
*/
const createComments = (comment) => {
  socialComment.createElement('li');
  socialComment.classList.add('social__comment');

  socialPicture.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.src = comment.avatar;
  socialPicture.alt = comment.name;
  socialPicture.width = '35';
  socialPicture.height = '35';

  socialText.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = comment.message;

  socialComments.appendChild(socialPicture, socialText);
  return socialComments;
};

/**
* Отрисовывает комментарии внутри полноразмерной фотографии
*/
const renderComments = (comments) => {
  socialComments.innerHTML = '';
  const fragmentComments = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createComments(comment);
    fragmentComments.appendChild(commentElement);
  });
};

export { renderComments };
