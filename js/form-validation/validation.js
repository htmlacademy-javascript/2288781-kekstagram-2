import {
  uploadForm,
  descriptionInput,
  hashtagsInput,
  DATA_FORM_SET,
  ERROR_MESSAGE,
  VALID_MESSAGE
} from '../form-validation/form-data.js';


const uploadImageValidator = new Pristine(
  uploadForm, {
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
 Валидируем комментарий по всем правилам из ТЗ
*/
// Указываем, что комментарий не обязателен
const validateDescription = (value) => {
  if (!value) {
    return true;
  }
  return () => VALID_MESSAGE.COMMENT_ARE_OPTIONAL;
};
// // eslint-disable-next-line no-console
// console.log(validateDescription('')); // true
// // eslint-disable-next-line no-console
// console.log(validateDescription('декабрь')); // false - если ввести любой текст в (' ')

uploadImageValidator.addValidator(
  descriptionInput,
  validateDescription,
  VALID_MESSAGE.COMMENT_ARE_OPTIONAL
);

// Проверяем лимит комментария - валидация длины комментария
const checkDescription = (string) => string.length <= DATA_FORM_SET.MAX_DESCRIPTION_LENGTH;

uploadImageValidator.addValidator(
  descriptionInput,
  checkDescription,
  ERROR_MESSAGE.ERROR_DESCRIPTION
);
// // eslint-disable-next-line no-console
// console.log(checkDescription('')); // true - если ввести любой текст в (' ') до 140 символов
// // eslint-disable-next-line no-console
// console.log(checkDescription('')); // false - если ввести текст длиннее 140 символов в (' ')


/*
 Валидируем хэштеги по всем правилам из ТЗ
*/
// Указываем, что хэштег начинается с символа # (решётка)
const startsWithHashtag = (item) => {
  if (item[0] !== '#') {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_NO_FIRST_SYMBOL_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  startsWithHashtag,
  ERROR_MESSAGE.ERROR_NO_FIRST_SYMBOL_HASHTAG
);
// // eslint-disable-next-line no-console
// console.log(startsWithHashtag('#hello')); // true
// // eslint-disable-next-line no-console
// console.log(startsWithHashtag('hello')); // false

// Указываем, что  хеш-тег не может состоять только из одной решётки
const isNotOnlySymbolHashtag = (item) => {
  if (item.length === 1 && item[0] === '#') {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isNotOnlySymbolHashtag,
  ERROR_MESSAGE.ERROR_ONLY_SYMBOL_HASHTAG
);
// // eslint-disable-next-line no-console
// console.log(isNotOnlySymbolHashtag('#h2')); // true
// // eslint-disable-next-line no-console
// console.log(isNotOnlySymbolHashtag('#')); // false

// Указываем, что строка после решётки должна состоять из букв и чисел
const checkHashtag = (value) => {
  if (!DATA_FORM_SET.HASHTAG.test(value)) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_NO_VALID_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  checkHashtag,
  ERROR_MESSAGE.ERROR_NO_VALID_HASHTAG
);
// // eslint-disable-next-line no-console
// console.log(checkHashtag('#h2')); // true
// // eslint-disable-next-line no-console
// console.log(checkHashtag('#@f-3')); // false

// Указываем, что максимальная длина одного хэштега 20 символов, включая решётку
const isMaxLengthHashtag = (string) => {
  if (string.length > DATA_FORM_SET.MAX_HASHTAG_LENGTH) {
    return false;
  }
  return () => ERROR_MESSAGE.ERROR_LENGTH_HASHTAG;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  isMaxLengthHashtag,
  ERROR_MESSAGE.ERROR_LENGTH_HASHTAG
);
// // eslint-disable-next-line no-console
// console.log(isMaxLengthHashtag('#h2ll')); // true - 4 символа для проверки
// // eslint-disable-next-line no-console
// console.log(isMaxLengthHashtag('#lppppppppppppp')); // false

// Указываем, если хэштеги нечувствительны к регистру ?? верный ли такой вариант?
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
// // eslint-disable-next-line no-console
// console.log(isLowerHashtag('#kjkj')); // true - 5 символа для проверки
// // eslint-disable-next-line no-console
// console.log(isLowerHashtag('#KJKJ')); // false

// Указываем, если хэштеги разделяются пробелами
const separatedBySpacesHashtag = (item) => {
  if (item.split(' ').includes('#')) {
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
const isNotDuplicatesHashtag = (item, number, array) => {
  if (array.includes(item, number + 1)) {
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
  return () => VALID_MESSAGE.HASHTAGS_ARE_OPTIONAL;
};

uploadImageValidator.addValidator(
  hashtagsInput,
  validateHashtags,
  VALID_MESSAGE.HASHTAGS_ARE_OPTIONAL
);
// // eslint-disable-next-line no-console
// console.log(validateHashtags('')); // true; false - если ввести любой текст в (' ')


export const isValid = () => uploadImageValidator.validate();
export const resetValidation = () => uploadImageValidator.reset();

/*
    2. Валидация формы загрузки изображения (данные для validation-form.js).

    2.3. хэштеги:
      ++  хэштег начинается с символа # (решётка);
      ++  строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
      ++  хеш-тег не может состоять только из одной решётки;
      ++  максимальная длина одного хэштега 20 символов, включая решётку;
      +  хэштеги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
      ++  хэштеги разделяются пробелами;
      ++  один и тот же хэштег не может быть использован дважды;
      ++  нельзя указать больше пяти хэштегов;
      ++  хэштеги необязательны;
      +  если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.

    2.4. Комментарий:
      ++ комментарий не обязателен;
      ++ длина комментария не может составлять больше 140 символов;
      + если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
*/
