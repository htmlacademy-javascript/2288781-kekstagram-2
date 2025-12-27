import {
  isEscapeKeydown
} from '../utils.js';

import {
  pageBody,
  uploadForm,
  uploadFileControl,
  photoEditorForm,
  photoEditorResetButton,
  descriptionInput,
  hashtagsInput
} from './form-data.js';

import {
  isValid,
  resetValidation
} from './validation.js';


const onDocumentKeydown = (event) => {
  // если фокус находится в поле ввода комментария/хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения
  if (document.activeElement !== descriptionInput && document.activeElement !== hashtagsInput && document.activeElement) {
    event.stopPropagation();
    return;
  }

  if (isEscapeKeydown(event)) {
    event.preventDefault();
    closePhotoEditor();
  }
};

const onCloseButtonClick = (event) => (event.preventDefault(), closePhotoEditor());

function closePhotoEditor () {
  photoEditorForm.value = '';

  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  photoEditorResetButton.removeEventListener('click', onCloseButtonClick);

  uploadForm.reset();
  resetValidation();
}

export const initUploadForm = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');

    document.removeEventListener('keydown', onDocumentKeydown);
  });
  photoEditorResetButton.addEventListener('click', onCloseButtonClick);
};

// Отправка формы с валидацией
uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!isValid) {
    return;
  }
  uploadForm.submit();
});


/*
  + Третья задача - реализовать закрытие формы.

    !!!Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла .img-upload__input.
    В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию.
    Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится,
    что будет нарушением техзадания.
    Значение других полей формы также нужно сбрасывать.

  1.2. Выбор изображения для загрузки осуществляется с помощью стандартного контрола загрузки файла .img-upload__input,
       который стилизован под букву «О» в логотипе.
       После выбора изображения (изменения значения поля .img-upload__input), показывается форма редактирования изображения.
       У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open.

      ??? После выбора изображения пользователем с помощью стандартного контрола загрузки файла .img-upload__input,
      нужно подставить его в форму редактирования вместо тестового изображения в блок предварительного просмотра и в превью эффектов.

  1.3 Закрытие формы редактирования изображения производится либо нажатием на кнопку .img-upload__cancel, либо нажатием клавиши Esc.
      Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open.

  ?Как отменить обработчик Esc при фокусе?
  + Задача не имеет одного верного решения, однако намекнём на самый простой — использовать stopPropagation
  для события нажатия клавиш в поле при фокусе.
*/
