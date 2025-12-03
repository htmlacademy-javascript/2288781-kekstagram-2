import { commentList, bigImageShownComments } from '/js/rendering-big-photos/const-big-photos.js';

/**
* 1. Шаблон комментария
* @param {Object} comment - объект с одним комментарием
* @returns {Element}
*/
const createComment = (comment) => {
  const { avatar, name, message } = comment;

  const commentLiElement = document.createElement('li');
  commentLiElement.classList.add('social__comment');

  const commentImageElement = document.createElement('img');
  commentImageElement.classList.add('social__picture');
  commentImageElement.src = avatar;
  commentImageElement.alt = name;
  commentImageElement.width = 35;
  commentImageElement.height = 35;

  const commentParagraphElement = document.createElement('p');
  commentParagraphElement.classList.add('social__text');
  commentParagraphElement.textContent = message;
  commentLiElement.appendChild(commentImageElement);
  commentLiElement.appendChild(commentParagraphElement);

  return commentLiElement;
};

/**
 * Обновляет количество показанных комментариев
 */
const updatesNumberComentsShown = () => {
  const numberComentsCount = commentList.querySelectorAll('.social__comment').length;
  bigImageShownComments.textContent = numberComentsCount;
};

/**
* Отрисовывает комментарии внутри полноразмерной фотографии
*/
export const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragmentComments = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragmentComments.appendChild(commentElement);
  });

  updatesNumberComentsShown();
};
