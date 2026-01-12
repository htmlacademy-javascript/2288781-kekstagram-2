import { isEscapeKeydown } from '../utils.js';
import { getDataArrays } from '../data.js';
import {
  uploadForm,
  uploadFileControl,
  photoEditorForm,
  photoEditorResetButton,
  descriptionInput,
  hashtagsInput,
  submitButton
} from '../form-validation/form-data.js';
import {
  isValid,
  resetValidation
} from '../form-validation/validation.js';
import { resetEffects } from '../image-editing/slider.js';
import { resetScale } from '../image-editing/scale.js';
import { sendData } from '../fetch/server-api.js';
import { showMessage } from '../fetch/api-message.js';
import { MESSAGE_TYPES } from '../fetch/api-data.js';


const { pageBody } = getDataArrays();

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
  submitButton.textContent = 'Отправка...';
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!isValid) {
    blockSubmitButton();
    return;
  }

  blockSubmitButton();

  const uploadFormData = new FormData(uploadForm);

  sendData(uploadFormData)
    .then(() => {
      closePhotoEditor();
      showMessage(MESSAGE_TYPES.SUCCESS);
    })
    .finally(() => {
      blockSubmitButton(false);
      submitButton.textContent = 'Отправить';
    })
    .catch(() => {
      showMessage(MESSAGE_TYPES.ERROR);
    });
});

export { initPhotoUploadForm };
