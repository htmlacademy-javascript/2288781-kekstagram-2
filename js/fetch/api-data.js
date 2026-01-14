const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Routes = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Methods = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorTexts = {
  GET: 'Ошибка загрузки данных. Попробуйте обновить страницу',
  POST: 'Ошибка отправки данных. Попробуйте ещё раз',
};

const alertTemplate = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

const templateSuccess = document
  .querySelector('#success')
  .content
  .cloneNode(true);

const successElement = templateSuccess
  .querySelector('.success');

const templateError = document
  .querySelector('#error')
  .content
  .cloneNode(true);

const errorElement = templateError
  .querySelector('.error');

const ALERT_SHOW_TIME = 5000;

export {
  BASE_URL,
  Routes,
  Methods,
  ErrorTexts,

  alertTemplate,
  successElement,
  errorElement,
  ALERT_SHOW_TIME
};
