import {
  isEscapeKeydown
} from '../utils.js';
import {
  ALERT_SHOW_TIME,
  pageBody,
  alertTemplate,
  successElement,
  errorElement
} from '../fetch/api-data.js';


export const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const messageTemplates = {
  [MESSAGE_TYPES.SUCCESS]: successElement,
  [MESSAGE_TYPES.ERROR]: errorElement
};

const showAlert = () => {
  const alertContainer = alertTemplate.cloneNode(true);
  pageBody.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showMessage = (type) => {
  const message = messageTemplates[type].cloneNode(true);

  const close = () => {
    message.remove();
    document.removeEventListener('keydown', onEscape);
  };

  function onEscape(evt) {
    if (isEscapeKeydown(evt)) {
      close();
    }
  }

  message.addEventListener('click', ({target}) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      close();
    }
  });

  document.addEventListener('keydown', onEscape);
  pageBody.appendChild(message);
};

export { showAlert, showMessage };
