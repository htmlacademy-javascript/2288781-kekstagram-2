const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки нового изображения

const uploadFileControl = uploadForm.querySelector('.img-upload__input'); // Выбор файла с изображением для загрузки

const photoEditorForm = uploadForm.querySelector('.img-upload__overlay'); // Применение одного из заранее заготовленных эффектов
const photoEditorScale = photoEditorForm.querySelector('.img-upload__scale'); // Изменение масштаба изображения
const photoEditorResetButton = photoEditorForm.querySelector('.img-upload__cancel'); // Выбор глубины эффекта с помощью ползунка

const hashtagsInput = uploadForm.querySelector('.text__hashtags'); // Добавление хэштегов
const descriptionInput = uploadForm.querySelector('.text__description'); // Добавление текстового комментария

const submitButton = document.querySelector('.img-upload__submit');


// Настройки и сообщения для валидации формы загрузки изображения
const DATA_FORM_SET = {
  HASHTAG: /^#[a-zа-яё0-9]{1,19}$/i,
  HASHTAGS_LIMIT: 5,
  MAX_HASHTAG_LENGTH: 20,
  MAX_DESCRIPTION_LENGTH: 140,
};

// Сообщения об ошибках для формы загрузки изображения
const ERROR_MESSAGE = {
  ERROR_MAX_LENGTH_DESCRIPTION: `Максимальная длина комментария не более ${DATA_FORM_SET.MAX_DESCRIPTION_LENGTH} символов`,
  ERROR__HASHTAG: 'Хэштег должен начинаться с символа # и содержать только буквы и цифры без пробелов и спецсимволов',
  ERROR_MAX_LENGTH_HASHTAG: `Максимальная длина одного хэштега ${DATA_FORM_SET.MAX_HASHTAG_LENGTH} символов, включая решётку`,
  ERROR_MAX_HASHTAGS: 'Превышено количество хэштегов, их должно быть не более 5',
  ERROR_REPEAT: 'Хэштеги повторяются'
};

export {
  uploadForm,

  uploadFileControl,

  photoEditorForm,
  photoEditorScale,
  photoEditorResetButton,

  descriptionInput,
  hashtagsInput,

  submitButton,

  DATA_FORM_SET,
  ERROR_MESSAGE
};

/*
  Основная задача домашней работы раздела 9 (первая часть) - реализовать функционал загрузки нового изображения на сайт и заполнения информации о нём.

  Задание состоит из двух частей:
  1. Загрузка нового изображения на сайт и заполнение информации о нём.
  2. Валидация формы загрузки изображения.

  1. Загрузка нового изображения на сайт и заполнение информации о нём.

  + Первая задача - прописать тегу <form> правильные значения атрибутов method и enctype и адрес action для отправки формы на сервер - index.html.
  + Вторая задача - изучить, что значит загрузка изображения, и как, когда и каким образом показывается форма редактирования изображения - upload-photo-form.js.
    Написать код и добавьте необходимые обработчики для реализации этого пункта техзадания.

    1.1. Загрузка нового изображения (данные форм в файле form-data.js):

      + выбор файла с изображением для загрузки;

      + изменение масштаба изображения;
      + применение одного из заранее заготовленных эффектов;
      + выбор глубины эффекта с помощью ползунка;

      + добавление текстового комментария;
      + добавление хэштегов.

    2. Валидация формы загрузки изображения ( => validation.js).
*/
