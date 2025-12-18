/*
  Основная задача домашней работы раздела 9 (первая часть) - реализовать функционал загрузки нового изображения на сайт и заполнения информации о нём.
  Задание состоит из двух частей:
  1. Загрузка нового изображения на сайт и заполнение информации о нём.
  2. Валидация формы загрузки изображения.

  1. Загрузка нового изображения на сайт и заполнение информации о нём
  + Первая задача - прописать тегу <form> правильные значения атрибутов method и enctype и адрес action для отправки формы на сервер.
  + Вторая задача - изучить, что значит загрузка изображения, и как, когда и каким образом показывается форма редактирования изображения.
    Написать код и добавьте необходимые обработчики для реализации этого пункта техзадания.

  1.1. Загрузка нового изображения:
    + выбор файла с изображением для загрузки;
    + изменение масштаба изображения;
    + применение одного из заранее заготовленных эффектов;
    + выбор глубины эффекта с помощью ползунка;
    + добавление текстового комментария;
    + добавление хэштегов.
*/

const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки нового изображения
const pageBody = document.querySelector('body'); // Тег body страницы

const uploadFileControl = uploadForm.querySelector('.img-upload__input'); // Выбор файла с изображением для загрузки
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay'); // Применение одного из заранее заготовленных эффектов
const photoEditorResetButton = photoEditorForm.querySelector('.img-upload__cancel'); // Выбор глубины эффекта с помощью ползунка

const descriptionInput = uploadForm.querySelector('.text__description'); // Добавление текстового комментария
const hashtagsInput = uploadForm.querySelector('.text__hashtags'); // Добавление хэштегов

const MAX_HASHTAGS = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;

export {
  pageBody,
  uploadForm,
  uploadFileControl,
  photoEditorForm,
  photoEditorResetButton,
  descriptionInput,
  hashtagsInput,
  MAX_HASHTAGS,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH
};
