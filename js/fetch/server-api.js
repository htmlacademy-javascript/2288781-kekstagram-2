import {
  BASE_URL,
  routes,
  methods,
  errorTexts
} from '../fetch/api-data.js';


const processPromise = (route, errorText = null, method = methods.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText ?? error.message);
    });

const getData = () => processPromise(routes.GET_DATA, errorTexts.GET_DATA);

const sendData = (body) => processPromise(routes.SEND_DATA, errorTexts.SEND_DATA, methods.POST, body);

export {
  getData,
  sendData
};
