import { createComments } from '/js/create-photos/comments-photo.js';
import { commentsList, bigImageShownCommentsCount, bigImageLoader } from '/js/rendering-big-photos/constanta-big-photos.js';

const COMMENTS_LIMIT = 5;
let commentsShown = 0;
const currentComments = [];

/**
 * Создает DOM-элемент комментария - шаблон одного комментария в полноразмерном фотокарточке
 * @returns {Node} DOM-элемент комментария
 */
const createСommentBigPicture = () => {
  const newCommentElement = commentsList.cloneNode(true);

  const newComment = newCommentElement.createElement('li');
  newComment.classList.add('social__comment');
  commentsList.appendChild(newComment);

  const avatarImages = newCommentElement.createElement('img');
  avatarImages.classList.add('social__picture');
  avatarImages.src = createComments().avatar;
  avatarImages.alt = createComments().name;
  avatarImages.width = 35;
  avatarImages.height = 35;
  newComment.appendChild(avatarImages);

  const descriptionText = newComment.createElement('p');
  descriptionText.classList.add('social__caption');
  descriptionText.textContent = createComments().description;
  newComment.append(descriptionText);

  const paragraphText = newComment.createElement('p');
  paragraphText.classList.add('social__text');
  paragraphText.textContent = createComments().message;
  newComment.append(paragraphText);

  return newCommentElement;
};

/**
 * Отрисовывает порцию комментариев, добавляя их к существующим комментариям
 * @param {*} comments
 */
const renderPortionСomments = (comments) => {
  const fragmentComment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragmentComment.appendChild(createСommentBigPicture(comment.avatar, comment.name, comment.massage));
  });

  commentsList.appendChild(fragmentComment);
};

/**
 * Показывает первую порцию комментариев
 */
const updateCommentSection = () => {
  const commentator = currentComments.slice(commentsShown, commentsShown + COMMENTS_LIMIT);

  renderPortionСomments(commentator);

  commentsShown += commentator.length;

  bigImageShownCommentsCount.textContent = commentsShown;

  // После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
  if (commentsShown >= currentComments.length) {
    bigImageLoader.classList.add('hidden');
  } else {
    bigImageLoader.classList.remove('hidden');
  }
};

export { updateCommentSection };
