import {  DATA_FORM_SET,
  ERROR_MESSAGE,
  uploadForm,
  descriptionInput,
  hashtagsInput
} from './form-data.js';

const uploadImageValidator = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    successClass: 'img-upload__field-wrapper--valid',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error'
  }
);

const validateDescription = (value) => {
  if (!value.trim().length) {
    return true;
  }
  return value.trim().length <= DATA_FORM_SET.MAX_DESCRIPTION_LENGTH;
};

const getHashtags = (string) => string.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => DATA_FORM_SET.HASHTAG.test(item));
};

const checkHashtagsCount = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= DATA_FORM_SET.HASHTAGS_LIMIT;
};

const checkHashtagsMaxSymbols = (value) => {
  if (!value.trim().length) {
    return true;
  }
  return value.trim().length <= DATA_FORM_SET.MAX_HASHTAG_LENGTH;
};

const checkUniqueHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

uploadImageValidator.addValidator(
  descriptionInput,
  validateDescription,
  ERROR_MESSAGE.ERROR_MAX_LENGTH_DESCRIPTION
);

uploadImageValidator.addValidator(
  hashtagsInput,
  checkHashtags,
  ERROR_MESSAGE.ERROR__HASHTAG
);

uploadImageValidator.addValidator(
  hashtagsInput,
  checkHashtagsCount,
  ERROR_MESSAGE.ERROR_MAX_HASHTAGS
);

uploadImageValidator.addValidator(
  hashtagsInput,
  checkHashtagsMaxSymbols,
  ERROR_MESSAGE.ERROR_MAX_LENGTH_HASHTAG
);

uploadImageValidator.addValidator(
  hashtagsInput,
  checkUniqueHashtags,
  ERROR_MESSAGE.ERROR_REPEAT
);

export const isValid = () => uploadImageValidator.validate();
export const resetValidation = () => uploadImageValidator.reset();
