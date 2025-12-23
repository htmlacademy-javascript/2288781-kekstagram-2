import { uploadForm, descriptionInput, hashtagsInput, DATA_FORM_SET, ERROR_MESSAGE } from '../form-validation/form-data.js';

const uploadImageValidator = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  // errorClass: 'img-upload__field-wrapper--error', // Класс, обозначающий невалидное поле
  // successClass: 'img-upload__field-wrapper--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  // errorTextTag: 'div', // Тег, который будет обрамлять текст ошибки - для проекта нам не нужен, так как стили уже прописаны в CSS (вместе span поменяла на div, чтобы не было конфликтов - вроде работает)
  errorTextClass: 'img-upload__field-wrapper--error' // Класс для элемента с текстом ошибки
});
// eslint-disable-next-line no-console
// console.log(elementForm); // Для проверки работы библиотеки Pristine в консоли


/*
 Валидируем комментарий по всем правилам из ТЗ
*/
// Указываем, что комментарий не обязателен
const validateDescription = (string) => {
  if (!string) {
    return true;
  }
  return () => 'Комментарий не обязателен';
};
// eslint-disable-next-line no-console
console.log(validateDescription('кексограм')); // true

uploadImageValidator.addValidator(
  descriptionInput,
  validateDescription,
  'Комментарий валиден'
);

// Проверяем лимит комментария - валидация длины комментария
const checkDescription = (string) => string.length <= DATA_FORM_SET.MAX_DESCRIPTION_LENGTH;

uploadImageValidator.addValidator(
  descriptionInput,
  checkDescription,
  ERROR_MESSAGE.ERROR_DESCRIPTION
);


/*
 Валидируем хэштеги по всем правилам из ТЗ
*/

// Указываем, что хэштег начинается с символа # (решётка)
const isNotStartHashtag = (item) => {
  if (item[0] !== '#') {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_NO_FIRST_SYMBOL_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isNotStartHashtag,
  ERROR_MESSAGE.ERROR_NO_FIRST_SYMBOL_HASHTAG
);

// Указываем, что  строка после решётки должна состоять из букв и чисел
const checkHashtag = (string) => {
  if (!DATA_FORM_SET.HASHTAG.test(string)) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_NO_VALID_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  checkHashtag,
  ERROR_MESSAGE.ERROR_NO_VALID_HASHTAG
);

// Указываем, что  хеш-тег не может состоять только из одной решётки
const isNotOnlySymbolHashtag = (string) => {
  if (!string.length === 1) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isNotOnlySymbolHashtag,
  ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG
);

// Указываем, что максимальная длина одного хэштега 20 символов, включая решётку
const isMaxLengthHashtag = (string) => {
  if (string.length > DATA_FORM_SET.MAX_HASHTAG_LENGTH) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isMaxLengthHashtag,
  ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG
);

// Указываем, если хэштеги нечувствительны к регистру
const isLowerHashtag = (string) => {
  if (string.toLowerCase()) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_ONE_AND_THE_SAME;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isLowerHashtag,
  ERROR_MESSAGE.ERROR_ONE_AND_THE_SAME
);

// Указываем, если хэштеги разделяются пробелами
const separatedBySpacesHashtag = (string) => {
  if (string.split(' ').trim().replace(/\s+/g, ' ')) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_WHITESPACE;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  separatedBySpacesHashtag,
  ERROR_MESSAGE.ERROR_WHITESPACE
);

// Указываем, что один и тот же хэштег не может быть использован дважды
const isNotDuplicatesHashtag = (item) => {
  if (!item === 2) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_REPEAT;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isNotDuplicatesHashtag,
  ERROR_MESSAGE.ERROR_REPEAT
);

// Указываем, что нельзя указать больше пяти хэштегов
const isNotMaxFiveHashtag = (value) => {
  if (value.length > DATA_FORM_SET.HASHTAG_COUNT_MAX) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_MAX_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isNotMaxFiveHashtag,
  ERROR_MESSAGE.ERROR_MAX_HASHTAG
);

// Указываем, что хэштеги не обязательны
const validateHashtags = (value) => {
  if (!value) {
    return true;
  }
  return () => 'Хэштеги не обязательны';
};

uploadImageValidator.addValidator(
  hashtagsInput,
  validateHashtags,
  'Хэштеги валидны'
);


export const isValid = () => uploadImageValidator.validate(
  validateDescription,
  checkDescription,
  isNotStartHashtag,
  checkHashtag,
  isNotOnlySymbolHashtag,
  isMaxLengthHashtag,
  isMaxLengthHashtag,
  isLowerHashtag,
  separatedBySpacesHashtag,
  isNotDuplicatesHashtag,
  isNotMaxFiveHashtag,
  validateHashtags,
);

/*
    2. Валидация формы загрузки изображения (данные для validation-form.js).

    2.3. хэштеги:
      +  хэштег начинается с символа # (решётка);
      +  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
      +  хеш-тег не может состоять только из одной решётки;
      +  максимальная длина одного хэштега 20 символов, включая решётку;
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
