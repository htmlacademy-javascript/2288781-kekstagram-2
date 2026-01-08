const BASE_URL = 'https://31.javascript.pages.academy/kekstagram';

const ROUTES = {
  DATA: '/data',
  SEND: '/',
};

const METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const ERROR_DATA = {
  [METHOD.GET]: 'Ошибка загрузки данных. Попробуйте обновить страницу',
  [METHOD.POST]: 'Ошибка отправки данных. Попробуйте ещё раз',
};

export {
  BASE_URL,
  ROUTES,
  METHOD,
  ERROR_DATA,
};
