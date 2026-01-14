import {
  BASE_URL,
  Routes,
  Methods,
  ErrorTexts
} from '../fetch/api-data.js';


const processPromise = (route, method = Methods.GET, errorText = null, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => processPromise(Routes.GET_DATA, ErrorTexts.GET_DATA);

const sendData = (body) => processPromise(Routes.SEND_DATA, Methods.POST, ErrorTexts.SEND_DATA, body);

export {
  getData,
  sendData
};
