const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const routes = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const methods = {
  GET: 'GET',
  POST: 'POST',
};

const errorTexts = {
  GET: 'Ошибка загрузки данных. Попробуйте обновить страницу',
  POST: 'Ошибка отправки данных. Попробуйте ещё раз',
};

const templateSuccess = document.querySelector('#success').content.cloneNode(true);
const successElement = templateSuccess.querySelector('.success');
const templateError = document.querySelector('#error').content.cloneNode(true);
const errorElement = templateError.querySelector('.error');

const ALERT_SHOW_TIME = 5000;

export {
  BASE_URL,
  routes,
  methods,
  errorTexts,
  templateSuccess,
  successElement,
  templateError,
  errorElement,
  ALERT_SHOW_TIME
};
