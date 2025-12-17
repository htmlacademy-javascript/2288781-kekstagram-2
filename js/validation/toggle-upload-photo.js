import { isEscapeKeydown } from '../utils.js';
import { imageUploadForm, imageUploadInput, imageUploadOverlay, imageUploadCancel, textDescription, textHashtags } from '../validation/form-data.js';
import { isValidation } from '../validation/validation-form.js';

/*
  1.2. Выбор изображения для загрузки осуществляется с помощью стандартного контрола загрузки файла .img-upload__input,
       который стилизован под букву «О» в логотипе (imageUploadInput) +

       После выбора изображения (изменения значения поля .img-upload__input), показывается форма редактирования изображения (imageUploadOverlay) +

       У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open (openEditingForm) +

      ??? После выбора изображения пользователем с помощью стандартного контрола загрузки файла .img-upload__input, // ???
      нужно подставить его в форму редактирования вместо тестового изображения в блок предварительного просмотра и в превью эффектов.

  - Третья задача - реализовать закрытие формы.

    Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла .img-upload__input.
    В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию.
    Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится,
    что будет нарушением техзадания.
    Значение других полей формы также нужно сбрасывать.


1.3 Закрытие формы редактирования изображения производится либо нажатием на кнопку .img-upload__cancel, либо нажатием клавиши Esc (onDocumentKeydown) +

    Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open (closeEditingForm) +

?Как отменить обработчик Esc при фокусе?
Задача не имеет одного верного решения, однако намекнём на самый простой — использовать stopPropagation для события нажатия клавиш в поле при фокусе +

*/

const openEditingForm = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const closeEditingForm = () => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imageUploadInput.value = '';

  document.addEventListener('keydown', onDocumentKeydown);
};

imageUploadInput.addEventListener('change', () => {
  openEditingForm();
});

imageUploadCancel.addEventListener('click', () => {
  closeEditingForm();
});

function onDocumentKeydown(evt) {
  if (isEscapeKeydown(evt)) {
    evt.preventDefault();

    closeEditingForm();
  }
}

textDescription.addEventListener('keydown', (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.stopPropagation();
  }
});

textHashtags.addEventListener('keydown', (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.stopPropagation();
  }
});

imageUploadForm.addEventListener('submit', (evt) => {
  if(!isValidation()){
    evt.preventDefault();
  }
});
