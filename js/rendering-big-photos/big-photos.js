import { bigImage, bigImageLikes, bigImageShownCommentsCount, bigImageTotalCommentsCount, bigImageCaption } from '../rendering-big-photos/constanta-big-photos.js';

export const addDataBigPhoto = (data) => {
  const { url, description, likes, comments } = data;
  bigImage.src = url;
  bigImage.alt = description;
  bigImageLikes.textContent = likes;
  bigImageShownCommentsCount.textContent = comments.length;
  bigImageTotalCommentsCount.textContent = comments.length;
  bigImageCaption.textContent = description;
};

// Задача - реализовать сценарий просмотра фотографий в полноразмерном режиме.
// В таком режиме пользователь получает несколько дополнительных возможностей:
// + детально рассмотреть изображение, -> modal-windows.js
// +- поставить «лайк», -> (likes-big-photos.js) не нужен
// + почитать комментарии, оставленные другими пользователями -> comment-big-photos.js

// Для отображения окна нужно удалять класс hidden у элемента .big-picture
// и каждый раз заполнять его данными о конкретной фотографии:
// + адрес изображения url подставьте как src изображения внутри блока .big-picture__img
// + количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count
// + общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count
// + cписок комментариев под фотографией: комментарии должны вставляться в блок .social__comments.
// + описание фотографии description вставьте строкой в блок .social__caption
// + Шаблон комментария - разметка каждого комментария должна выглядеть так:
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
// + После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
// + Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия - modal-window.js
// + Подключите модуль в проект - gallery.js

// const createСommentBigPicture = () => {
//   const newCommentElement = commentsList.cloneNode(true);

//   const newComment = newCommentElement.createElement('li');
//   newComment.classList.add('social__comment');
//   commentsList.appendChild(newComment);

//   const avatarImages = newCommentElement.createElement('img');
//   avatarImages.classList.add('social__picture');
//   avatarImages.src = createComments(AVATARS).avatar;
//   avatarImages.alt = createComments(NAMES).name;
//   avatarImages.width = 35;
//   avatarImages.height = 35;
//   newComment.appendChild(avatarImages);

//   const descriptionText = newComment.createElement('p');
//   descriptionText.classList.add('social__caption');
//   descriptionText.textContent = createComments(DESCRIPTIONS).description;
//   newComment.append(descriptionText);

//   const paragraphText = newComment.createElement('p');
//   paragraphText.classList.add('social__text');
//   paragraphText.textContent = createComments(MESSAGES).message;
//   newComment.append(paragraphText);

//   return newCommentElement;
// };

// /**
//  * Отрисовывает порцию комментариев, добавляя их к существующим комментариям
//  * @param {*} comments
//  */
// const renderPortionСomments = (comments) => {
//   const fragmentComment = document.createDocumentFragment();

//   comments.forEach((comment) => {
//     fragmentComment.appendChild(createСommentBigPicture(comment.avatar, comment.name, comment.description, comment.massage));
//   });

//   commentsList.appendChild(fragmentComment);
// };

// /**
//  * Показывает первую порцию комментариев
//  */
// const updateCommentSection = () => {
//   let commentsShown = 0;
//   const commentator = currentComments.slice(commentsShown, commentsShown + COMMENTS_LIMIT);

//   renderPortionСomments(commentator);

//   commentsShown += commentator.length;

//   bigImageShownCommentsCount.textContent = commentsShown;

//   // После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
//   if (commentsShown >= currentComments.length) {
//     bigImageLoader.classList.add('hidden');
//   } else {
//     bigImageLoader.classList.remove('hidden');
//   }
// };

// export { updateCommentSection };
