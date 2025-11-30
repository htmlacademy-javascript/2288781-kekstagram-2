const commentList = document.querySelector('.social__comments');

/**
* Шаблон комментария
* @param {Object} comment - объект с одним комментарием
* @returns {Element}
*/
const createComment = (comment) => {
  const {avatar, name, message} = comment;

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
const renderItemDetails = (data, target) => {
  const { url, description, likes, comments } = data;

  const bigImage = target.querySelector('.big-picture__img img');

  bigImage.src = url;
  bigImage.alt = description;

  target.querySelector('.social__caption').textContent = description;
  target.querySelector('.likes-count').textContent = likes;
  target.querySelector('.social__comment-count').textContent = comments.length;

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

// ??? ('.social__comment-shown-count' + ' из ' + '.social__comment-total-count' + ' комментариев')
