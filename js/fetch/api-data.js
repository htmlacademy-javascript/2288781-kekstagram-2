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
  GET_DATA: 'Ошибка загрузки данных. Попробуйте обновить страницу',
  POST_DATA: 'Ошибка отправки данных. Попробуйте ещё раз',
};

const SubmitButtonTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправка...'
};

const alertTemplate = document.querySelector('#data-error').content;
const alertContainer = alertTemplate.querySelector('.data-error');

const templateSuccess = document.querySelector('#success').content;
const successElement = templateSuccess.querySelector('.success');

const templateError = document.querySelector('#error').content;
const errorElement = templateError.querySelector('.error');

const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const messageTemplates = {
  [MESSAGE_TYPES.SUCCESS]: successElement,
  [MESSAGE_TYPES.ERROR]: errorElement
};

const ALERT_SHOW_TIME = 5000;

export {
  BASE_URL,
  Routes,
  Methods,
  ErrorTexts,
  SubmitButtonTexts,

  alertContainer,
  successElement,
  errorElement,

  MESSAGE_TYPES,
  messageTemplates,

  ALERT_SHOW_TIME
};
