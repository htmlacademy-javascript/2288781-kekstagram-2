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

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ALERT_SHOW_TIME = 5000;

const pageBody = document
  .querySelector('body');

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

export {
  Routes,
  Methods,
  ErrorTexts,
  BASE_URL,
  ALERT_SHOW_TIME,
  pageBody,
  alertTemplate,
  successElement,
  errorElement
};
