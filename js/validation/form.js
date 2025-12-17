// eslint-disable-next-line no-redeclare
/* global Pristine:readonly */
/* eslint-disable no-console */

import { imageUploadForm } from '../validation/form-data.js';

/*
  + Первая задача - прописать тегу <form> правильные значения атрибутов method и enctype и адрес action для отправки формы на сервер.

  Обратите внимание!
  В разделе про работу с сетью мы доработаем механизм отправки данных, а пока достаточно правильных атрибутов у тега <form>.
  Если форма заполнена верно, то после отправки покажется страница сервера (по адресу из атрибута action тега form) с успешно отправленными данными.
  Если же форма пропустила какие-то некорректные значения, то будет показана страница с допущенными ошибками.
  В идеале у пользователя не должно быть сценария, при котором он может отправить некорректную форму.
*/

/**
 * Расставляем атрибуты в HTML
 */
const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__form', // Элемент, на который будут добавляться классы
  errorClass: 'img-upload__form--invalid', // Класс, обозначающий невалидное поле
  successClass: 'img-upload__form--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'error' // Класс для элемента с текстом ошибки
});

/**
 * Реализуем валидацию поле ввода загрузки файла через JS
 */
pristine.addValidator(imageUploadForm.querySelector('#upload-file'));

imageUploadForm.addEventListener('sumbit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  // const isValid = pristine.validate();
  // if (isValid) {
  //   console.log('Можно опубликовать');
  // } else {
  //   console.log('Форма невалидна');
  // }
});

export { pristine };
