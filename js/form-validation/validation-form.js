import { uploadForm, hashtagsInput, descriptionInput, DATA_FORM_SET, ERROR_MESSAGE } from '../form-validation/form-data.js';
import { pristine } from '../form-validation/form.js';

/*
- Четвертая задача - написать код для валидации формы добавления изображения, используя библиотеку Pristine
  3.2. Страница реагирует на неправильно введённые значения в форму.
    Если данные, введённые в форму, не соответствуют ограничениям, указанным в пунктах 2.3 и 2.4,
    форму невозможно отправить на сервер.
    При попытке отправить форму с неправильными данными отправки не происходит, а пользователю
    показываются ошибки для неверно заполненных полей
    (для проверки данных используется сторонняя библиотека Pristine).

    Ошибки выводятся внутри блока .img-upload__field-wrapper соответствующего поля.
    Также, если поле заполнено неверно, блоку, в котором выводится текст ошибки,
    добавляется класс .img-upload__field-wrapper--error.

?Валидация хеш-тегов?
Для валидации хэштегов вам придётся вспомнить, как работать с массивами.
Набор хэштегов можно превратить в массив, воспользовавшись методом .split().
Он разбивает строки на массивы.
После этого, вы можете написать цикл, который будет ходить по полученному массиву
и проверять каждый из хэштегов на предмет соответствия ограничениям.
Если хотя бы один из тегов не проходит нужных проверок, показывать сообщение об ошибке.

Поля, не перечисленные в техзадании, но существующие в разметке, особой валидации не требуют.
*/

let error = '';

export const isValidation = () => {
  const hashtagsValue = hashtagsInput.value;
  const commentValue = descriptionInput.value;

  pristine.addValidator(
    uploadForm,
    () => {
      const hashtags = hashtagsValue.toLowerCase().trim().split(' ').filter((item) => item !== '');
      const seenTags = new Set();

      for (let i = 0; i < hashtags.length; i++) {
        const tag = hashtags[i];
        const lowerCaseTags = hashtags.map((tag) => tag.toLowerCase());
        const uniqueTags = new Set(lowerCaseTags);

        if (tag !== '#') {
          error = ERROR_MESSAGE.ERROR_NO_HASHTAG; // хэштег начинается с символа # (решётка)
          return false;
        } else if (!DATA_FORM_SET.HASHTAG.test(tag)) {
          error = ERROR_MESSAGE.ERROR_NO_VALID_SYMBOL; // строка после решётки должна состоять из букв и чисел
          return false;
        } else if (seenTags.has(tag === '#') && tag.length === 1) {
          error = ERROR_MESSAGE.ERROR_ONLY_HASHTAG; // хэштег не может состоять только из одной решётки
          return false;
        } else if (tag.length > DATA_FORM_SET.MAX_HASHTAG_LENGTH) {
          error = ERROR_MESSAGE.ERROR_LENGTH_HASHTAG; // максимальная длина одного хэштега 20 символов, включая решётку
          return false;
        } else if (seenTags.size(tag) !== seenTags.size(tag.toLowerCase())) {
          error = ERROR_MESSAGE.ERROR_ONE_AND_THE_SAME; // хэштеги нечувствительны к регистру - правильно ли?
          return false;
        } else if (seenTags.has(tag) === seenTags.has(!tag.trim())) {
          error = ERROR_MESSAGE.ERROR_WHITESPACE; // хэштеги разделяются пробелами
          return false;
        } else if (uniqueTags.size < lowerCaseTags.length) {
          error = ERROR_MESSAGE.ERROR_REPEAT; // один и тот же хэштег не может быть использован дважды
          return false;
        } else if (tag.length > DATA_FORM_SET.HASHTAG_COUNT_MAX) {
          error = ERROR_MESSAGE.ERROR_HASHTAG; // нельзя указать больше пяти хэштегов
          return false;
        } else {
          seenTags.add(tag);
        }
      }
      // ??? хэштеги необязательны;
      // ??? если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
      return true;
    },

    () => {
      const comments = commentValue;
      if (comments.length > DATA_FORM_SET.MAX_DESCRIPTION_LENGTH) {
        error = ERROR_MESSAGE.ERROR_DESCRIPTION; // длина комментария не может составлять больше 140 символов
        return false;
      }
      // ??? комментарий не обязателен;
      // ??? если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
      return true;
    },

    () => error
  );

  return true;
};


uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  pristine.validate();
  isValidation();
});

