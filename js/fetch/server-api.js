import {
  BASE_URL,
  Routes,
  Methods,
  ErrorTexts
} from '../fetch/api-data.js';


const processPromise = (method, errorText, body = null) =>
  fetch(`${BASE_URL}${Routes[method]}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(errorText ?? error.message);
    });

const getData = () => processPromise(Routes.GET_DATA, Methods.GET, ErrorTexts.GET_DATA);

const sendData = (body) => processPromise(Routes.SEND_DATA, Methods.POST, ErrorTexts.POST_DATA, body);

export {
  getData,
  sendData
};
