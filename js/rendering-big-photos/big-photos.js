import {
  bigImage,
  bigImageLikes,
  bigImageShownCommentsCount,
  bigImageTotalCommentsCount,
  bigImageCaption
} from '../rendering-big-photos/constanta-big-photos.js';

export const addDataBigPhoto = (data) => {
  const { url, description, likes, comments } = data;
  bigImage.src = url;
  bigImage.alt = description;
  bigImageLikes.textContent = likes;
  bigImageShownCommentsCount.textContent = 0; // временно не показываем
  bigImageTotalCommentsCount.textContent = comments.length;
  bigImageCaption.textContent = description;
};

bigImageLikes.addEventListener('click', (target) => {
  if (target === bigImageLikes) {
    addDataBigPhoto();
  }
});

/*
  Задача - реализовать сценарий просмотра фотографий в полноразмерном режиме.
  В таком режиме пользователь получает несколько дополнительных возможностей:
  + детально рассмотреть изображение, -> modal-windows.js
  + поставить «лайк», -> (likes-big-photos.js) в принципе не нужен, но я решила оставить
  + почитать комментарии, оставленные другими пользователями -> comment-big-photos.js

  Для отображения окна нужно удалять класс hidden у элемента .big-picture (bigPicture)
  и каждый раз заполнять его данными о конкретной фотографии:
  + адрес изображения url подставьте как src изображения внутри блока .big-picture__img (bigImag)
  + количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count (bigImageShownCommentsCount)
  + общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count (bigImageTotalCommentsCount)
  + cписок комментариев под фотографией: комментарии должны вставляться в блок .social__comments (commentsList)
  + описание фотографии description вставьте строкой в блок .social__caption (bigImageCaption)
  + Шаблон комментария - разметка каждого комментария должна выглядеть так:
  <li class="social__comment">
    <img
      class="social__picture"
      src="{{аватар}}"
      alt="{{имя комментатора}}"
      width="35"
      height="35"
    >
    <p class="social__text">{{текст комментария}}</p>
  </li>
  + После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
  + Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия - modal-window.js
  + Подключите модуль в проект
*/
