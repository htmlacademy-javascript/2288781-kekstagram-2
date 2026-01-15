import {
  isEscapeKeydown
} from '../utils.js';
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
  showMessage,
  MESSAGE_TYPES
} from '../fetch/api-message.js';
import {
  resetEffects
} from '../image-editing/slider.js';
import {
  resetScale
} from '../image-editing/scale.js';


const onDocumentKeydown = (evt) => {
  // если фокус находится в поле ввода комментария/хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения
  if (document.activeElement !== descriptionInput && document.activeElement !== hashtagsInput && document.activeElement) {
    evt.stopPropagation();
    return;
  }

  if (isEscapeKeydown(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

const onCloseButtonClick = (evt) => (evt.preventDefault(), closePhotoEditor());

function closePhotoEditor () {
  photoEditorForm.value = '';
  uploadFileControl.value = '';
  hashtagsInput.value = '';
  descriptionInput.value = '';

  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  uploadForm.reset();
  resetValidation();
  resetEffects();
  resetScale();
}

const initPhotoUploadForm = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');

    document.removeEventListener('keydown', onDocumentKeydown);
  });
  photoEditorResetButton.addEventListener('click', onCloseButtonClick);
};

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
      showMessage(MESSAGE_TYPES.SUCCESS);
    })
    .finally(() => {
      blockSubmitButton(false);
    })
    .catch(() => {
      showMessage(MESSAGE_TYPES.ERROR);
    });
});

export { initPhotoUploadForm };
