import {
  uploadForm,
  descriptionInput,
  hashtagsInput,
  DATA_FORM_SET,
  ERROR_MESSAGE
} from './form-data.js';

const uploadImageValidator = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
    errorClass: 'img-upload__field-wrapper--error', // Класс, обозначающий невалидное поле
    successClass: 'img-upload__field-wrapper--valid', // Класс, обозначающий валидное поле
    errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
    errorTextTag: 'div', // Тег, который будет обрамлять текст ошибки (взят из примера "Валидация формы с помощью PristineJS", вместе span поменяла на div, чтобы не было конфликтов - вроде работает)
    errorTextClass: 'img-upload__field-wrapper--error' // Класс для элемента с текстом ошибки
  }
);
// // eslint-disable-next-line no-console
// console.log(uploadImageValidator); // Для проверки работы библиотеки Pristine в консоли


/*
колбек валидатора должен проверить значение, которое ввел пользователь и "ответить" (вернуть булевое значение)
валидное ли значение:
если значение валидное - возвращает true, иначе - false
*/
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

/*
    2. Валидация формы загрузки изображения (данные для validation.js).

  Следует разделять случаи, когда:
    введён невалидный хэштег;
    превышено количество хэштегов;
    хэштеги повторяются;
    длина комментария больше 140 символов.

    2.3. хэштеги:
      +  хэштег начинается с символа # (решётка);
      +  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
      +  хеш-тег не может состоять только из одной решётки;
      +?  максимальная длина одного хэштега 20 символов, включая решётку;
      +  хэштеги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
      +  хэштеги разделяются пробелами;
      +  один и тот же хэштег не может быть использован дважды;
      +  нельзя указать больше пяти хэштегов;
      +  хэштеги необязательны;
      +  если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.

    2.4. Комментарий:
      + комментарий не обязателен;
      + длина комментария не может составлять больше 140 символов;
      + если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
*/
