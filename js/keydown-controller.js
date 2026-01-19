import {
  isEscapeKeydown
} from './utils.js';

const windows = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKeydown(evt)) {
    const lastIndex = windows.length - 1;
    if(windows[lastIndex].optionsFn && !windows[lastIndex].optionsFn()) {
      return;
    }
    windows[lastIndex].closeFn();
    windows.length -= 1;
    if (!windows.length) {
      listener = null;
      document
        .removeEventListener('keydown', onDocumentKeydown);
    }
  }
};

export const registerWindow = (closeFn, optionsFn = null) => {
  windows.push({
    closeFn,
    optionsFn
  });
  if (!listener) {
    listener = document
      .addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeRegistrationWindow = () => {
  windows.length -= 1;
  if (!windows.length) {
    listener = null;
    document
      .removeEventListener('keydown', onDocumentKeydown);
  }
};
