import { isEscapeKeydown } from '../utils.js';
import { getDataArrays } from '../data.js';
import {
  ALERT_SHOW_TIME,
  alertTemplate,
  messageTemplates
} from '../fetch/api-data.js';


const { pageBody } = getDataArrays();

const showAlert = () => {
  const alertContainer = alertTemplate.cloneNode(true);
  pageBody.append(alertContainer);

  const alertBlock = pageBody.querySelector('.data-error');

  setTimeout(() => {
    alertBlock.remove();
  }, ALERT_SHOW_TIME);
};

const showMessage = (type, blockClass, buttonClass) => {
  const messageElement = messageTemplates(type).cloneNode(true);
  const messageBlock = messageElement.querySelector(blockClass);

  pageBody.append(messageBlock);

  const close = () => {
    messageBlock.remove();
    document.removeEventListener('keydown', onEscape);
  };

  function onEscape(evt) {
    if (isEscapeKeydown(evt)) {
      close();
    }
  }

  messageBlock.querySelector(buttonClass).addEventListener('click', ({target}) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      close();
    }
  });

  document.addEventListener('keydown', onEscape);
  pageBody.appendChild(messageBlock);
};

export {
  showAlert,
  showMessage
};
