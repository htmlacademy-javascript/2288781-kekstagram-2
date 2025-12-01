const commentList = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const bigImage = document.querySelector('.big-picture__img img');
const bigImageCaption = document.querySelector('.social__caption');
const bigImageLikes = document.querySelector('.likes-count');
const bigImageShownComments = document.querySelector('.social__comment-shown-count');
const bigImageTotalComment = document.querySelector('.social__comment-count');
const bigImageLoader = document.querySelector('.comments-loader');
/**
* Шаблон комментария
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
* Отрисовывает комментарии внутри полноразмерной фотографии
*/
const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragmentComments = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragmentComments.appendChild(commentElement);
  });

  commentList.appendChild(fragmentComments);
};

/**
* Меняет данные полноразмерной фотографии
*/
const renderItemDetails = (data) => {
  const { url, description, likes, comments } = data;
  bigPicture.classList.remove('hidden');
  bigImage.src = url;
  bigImage.alt = description;

  bigImageCaption.textContent = description;
  bigImageLikes.textContent = likes;
  bigImageShownComments.textContent = comments.length;

  // После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
  bigImageTotalComment.classList.add('hidden');
  bigImageLoader.classList.add('hidden');

  renderComments(comments);
};

export { renderItemDetails };


// Для отображения окна нужно удалять класс hidden у элемента .big-picture
// и каждый раз заполнять его данными о конкретной фотографии:
// + адрес изображения url подставьте как src изображения внутри блока .big-picture__img
// + количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count
// + общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count
// + cписок комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
// + описание фотографии description вставьте строкой в блок .social__caption

// Шаблон комментария
//  Разметка каждого комментария должна выглядеть так:
// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35"
//     height="35"
//   >
//   <p class="social__text">{{текст комментария}}</p>
// </li>

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект.
