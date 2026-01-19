import {
  uploadForm,
  uploadFileControl,
  photoEditorForm,
  photoEditorResetButton,
  descriptionInput,
  hashtagsInput,
  submitButton,
  pageBody
} from '../form-validation/form-data.js';
import {
  isValid,
  resetValidation
} from './validation.js';
import {
  sendData
} from '../fetch/server-api.js';
import {
  MESSAGE_TYPES,
  showMessage
} from '../fetch/api-message.js';
import {
  resetEffects
} from '../image-editing/slider.js';
import {
  resetScale
} from '../image-editing/scale.js';
import {
  registerWindow,
  removeRegistrationWindow
} from '../keydown-controller.js';

const canCloseForm = () => !(document.activeElement === descriptionInput || document.activeElement === hashtagsInput);

function closePhotoEditor() {
  photoEditorForm
    .classList
    .add('hidden');
  pageBody
    .classList
    .remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetEffects();
  resetScale();
}

const initPhotoUploadForm = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm
      .classList
      .remove('hidden');
    pageBody
      .classList
      .add('modal-open');

    registerWindow(closePhotoEditor, canCloseForm);
  });
};

photoEditorResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePhotoEditor();
  removeRegistrationWindow();
});

const blockSubmitButton = (isDisabled = true) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? 'Отправка...' : 'Опубликовать';
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!isValid()) {
    return;
  }

  const uploadFormData = new FormData(uploadForm);
  blockSubmitButton();
  sendData(uploadFormData)
    .then(() => {
      closePhotoEditor();
      removeRegistrationWindow();
      showMessage(MESSAGE_TYPES.SUCCESS);
    })
    .finally(() => {
      blockSubmitButton(false);
    })
    .catch(() => {
      showMessage(MESSAGE_TYPES.ERROR);
    });
});

export {
  initPhotoUploadForm
};
