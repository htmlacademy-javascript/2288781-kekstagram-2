import { isEscapeKeydown } from '../utils.js';
import { getDataArrays } from '../data.js';
import {
  ALERT_SHOW_TIME,
  successElement,
  errorElement
} from '../fetch/api-data.js';


const { pageBody } = getDataArrays();

// Показ сообщения
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  pageBody.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = () => {
  const close = () => {
    successElement.remove();
    document.removeEventListener('keydown', onEscape);
  };

  function onEscape (event) {
    if (isEscapeKeydown(event)) {
      close();
    }
  }

  successElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('success') || event.target.classList.contains('success__button')) {
      close();
    }
  });

  document.addEventListener('keydown', onEscape);
  pageBody.appendChild(successElement);
};

const showErrorMessage = () => {
  const close = () => {
    errorElement.remove();
    document.removeEventListener('keydown', onEscape);
  };

  function onEscape (event) {
    if (isEscapeKeydown(event)) {
      close();
    }
  }

  errorElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('error') || event.target.classList.contains('error__button')) {
      close();
    }
  });

  document.addEventListener('keydown', onEscape);
  pageBody.appendChild(errorElement);
};

export { showAlert, showSuccessMessage, showErrorMessage };
