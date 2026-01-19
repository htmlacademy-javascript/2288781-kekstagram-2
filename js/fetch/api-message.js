import {
  ALERT_SHOW_TIME,
  pageBody,
  alertTemplate,
  successElement,
  errorElement
} from '../fetch/api-data.js';
import {
  registerWindow,
  removeRegistrationWindow } from '../keydown-controller.js';

const MESSAGE_TYPES = {
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
  };

  message.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      close();
      removeRegistrationWindow();
    }
  });
  registerWindow(close);
  pageBody.appendChild(message);
};

export {
  MESSAGE_TYPES,
  showAlert,
  showMessage
};
