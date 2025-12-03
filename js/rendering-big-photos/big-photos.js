// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ ОКНА С ПОЛНОРАЗМЕРНЫМ ИЗОБРАЖЕНИЕМ

// Задача - реализовать сценарий просмотра фотографий в полноразмерном режиме.
// В таком режиме пользователь получает несколько дополнительных возможностей:
// + детально рассмотреть изображение,
// - поставить «лайк»,
// - почитать комментарии, оставленные другими пользователями

import { isBody, bigPicture, bigImage, socialCaption, likesCount, socialCommentShownCount, socialCommentTotalCount, commentsLoader } from '/js/rendering-big-photos/const-big-photos.js';
import { onDocumentKeydown } from '/js/rendering-big-photos/modal-window.js';
import { renderComments } from '/js/rendering-big-photos/comments-big-photo.js';

/**
* Отрисовываем из миниатюр окно полноразмерной фотографии
*/
export const openModal = (data) => {
  // 2. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
  isBody.classList.add('modal-open');
  // Показываем окно
  bigPicture.classList.remove('hidden');

  // Данные фотокарточки
  bigImage.src = data.url;
  bigImage.alt = data.description;
  likesCount.textContent = data.likes;
  socialCommentShownCount.textContent = data.comments.length;
  socialCaption.textContent = data.description;

  // После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
  socialCommentTotalCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // Рендерируем комментарий из объекта data
  renderComments(data.comments);

  // Обработчик клавиши Esc для закрытия модального окна
  document.addEventListener('keydown', onDocumentKeydown);
};


// 1. Для отображения окна нужно удалять класс hidden у элемента .big-picture
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
