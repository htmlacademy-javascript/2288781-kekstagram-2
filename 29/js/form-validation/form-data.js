const uploadForm = document.querySelector('.img-upload__form');

const uploadFileControl = uploadForm.querySelector('.img-upload__input');

const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorScale = photoEditorForm.querySelector('.img-upload__scale');
const photoEditorResetButton = photoEditorForm.querySelector('.img-upload__cancel');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');

const submitButton = document.querySelector('.img-upload__submit');

const pageBody = document.querySelector('body');

const DATA_FORM_SET = {
  HASHTAG: /^#[a-zа-яё0-9]{1,19}$/i,
  HASHTAGS_LIMIT: 5,
  MAX_HASHTAG_LENGTH: 20,
  MAX_DESCRIPTION_LENGTH: 140,
};

const ERROR_MESSAGE = {
  ERROR_MAX_LENGTH_DESCRIPTION: `Максимальная длина комментария не более ${DATA_FORM_SET.MAX_DESCRIPTION_LENGTH} символов`,
  ERROR__HASHTAG: 'Хэштег должен начинаться с символа # и содержать только буквы и цифры без пробелов и спецсимволов',
  ERROR_MAX_LENGTH_HASHTAG: `Максимальная длина одного хэштега ${DATA_FORM_SET.MAX_HASHTAG_LENGTH} символов, включая решётку`,
  ERROR_MAX_HASHTAGS: 'Превышено количество хэштегов, их должно быть не более 5',
  ERROR_REPEAT: 'Хэштеги повторяются'
};

export {
  uploadForm,

  uploadFileControl,

  photoEditorForm,
  photoEditorScale,
  photoEditorResetButton,

  descriptionInput,
  hashtagsInput,

  submitButton,

  pageBody,

  DATA_FORM_SET,
  ERROR_MESSAGE
};
