/**
 * МОДУЛЬ С ДАННЫМИ ДЛЯ РАБОТЫ С FETCH
 */

import { getDataArrays } from '../data.js';


const { pageBody } = getDataArrays();

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram'; // Базовый URL сервера

// Константы для различных маршрутов сервера
const routes = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

// Константы для методов HTTP-запросов
const methods = {
  GET_DATA: 'GET',
  POST_DATA: 'POST',
};

// Сообщения об ошибках для различных методов запросов
const errorTexts = {
  GET_DATA: 'Ошибка загрузки данных. Попробуйте обновить страницу',
  POST_DATA: 'Ошибка отправки данных. Попробуйте ещё раз',
};

const dataErrorTemplate = document.querySelector('#data-error').content;
const errorElement = dataErrorTemplate.querySelector('.error');
const dataError = document.querySelector('.data-error');
const successTemplate = document.querySelector('#success').content;
const successElement = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;

// Константа времени ожидания оповещения
const DATA_ERROR_TIMEOUT = 5000;

// Константа стиля оповещения
const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;

  pageBody.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, DATA_ERROR_TIMEOUT);
};

export {
  BASE_URL,
  routes,
  methods,
  errorTexts,
  dataErrorTemplate,
  errorElement,
  dataError,
  successTemplate,
  successElement,
  errorTemplate,
  DATA_ERROR_TIMEOUT,
  showErrorAlert
};


/*
  4.2. Если при загрузке данных с сервера произошла ошибка запроса,
       нужно показать соответствующее сообщение.
       Разметку сообщения, которая находится в блоке #data-error внутри шаблона template,
       нужно разместить перед закрывающим тегом </body>.
       + Сообщение удаляется со страницы через 5 секунд.

  3.4. Если отправка данных прошла успешно, показывается соответствующее сообщение.
       Разметку сообщения, которая находится в блоке #success внутри шаблона template,
       нужно разместить перед закрывающим тегом </body>.
       Сообщение должно удаляться со страницы после нажатия на кнопку .success__button,
       по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

  3.5. Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение.
       Разметку сообщения, которая находится в блоке #error внутри шаблона template,
       нужно разместить перед закрывающим тегом </body>.
       Сообщение должно удаляться со страницы после нажатия на кнопку .error__button,
       по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.
       В таком случае вся введённая пользователем информация сохраняется,
       чтобы у него была возможность отправить форму повторно.
*/
