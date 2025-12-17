/*
  - Вторая задача - изучить, что значит загрузка изображения, и как, когда и каким образом показывается форма редактирования изображения.
    Написать код и добавьте необходимые обработчики для реализации этого пункта техзадания.

  В работе вы можете опираться на код показа окна с полноразмерной фотографией, который вы, возможно, уже написали в предыдущей домашней работе.
  Важно! Подстановка выбранного изображения в форму — это отдельная домашняя работа. В данном задании этот пункт реализовывать не нужно.

  1. Загрузка нового изображения на сайт и заполнение информации о нём

  1.1. Загрузка нового изображения:
    + выбор файла с изображением для загрузки;
    + изменение масштаба изображения;
    - применение одного из заранее заготовленных эффектов; ??
    - выбор глубины эффекта с помощью ползунка; ??
    + добавление текстового комментария;
    + добавление хэштегов.
*/

const imageUploadForm = document.querySelector('.img-upload__form'); // Форма загрузки нового изображения
const imageUploadInput = document.querySelector('.img-upload__input'); // Выбор файла с изображением для загрузки +
const imageUploadOverlay = document.querySelector('.img-upload__overlay'); // Применение одного из заранее заготовленных эффектов
const imageUploadCancel = document.querySelector('.img-upload__cancel'); // Выбор глубины эффекта с помощью ползунка ?
const textDescription = document.querySelector('.text__description'); // добавление текстового комментария
const textHashtags = document.querySelector('.text__hashtags'); // добавление хэштегов

const MAX_HASHTAGS = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;

export {
  imageUploadForm,
  imageUploadInput,
  imageUploadOverlay,
  imageUploadCancel,
  textDescription,
  textHashtags,
  MAX_HASHTAGS,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH
};
