import {
  dataErrorTemplate,
  errorElement,
  successTemplate,
  successElement
} from '../fetch/server-data.js';

import { getDataArrays } from '../data.js';

import { isEscapeKeydown } from '../utils.js';


const { pageBody } = getDataArrays();

export const showSuccessMessage = () => {
  successTemplate.cloneNode(true);
  successElement();

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

export const showErrorMessage = () => {
  dataErrorTemplate.cloneNode(true);
  errorElement();

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
