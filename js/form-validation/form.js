

// /**
//  * Расставляем атрибуты в HTML
//  */
// const pristine = new Pristine(initUploadForm, {
//   classTo: 'img-upload__form', // Элемент, на который будут добавляться классы
//   errorClass: 'img-upload__form--invalid', // Класс, обозначающий невалидное поле
//   successClass: 'img-upload__form--valid', // Класс, обозначающий валидное поле
//   errorTextParent: 'img-upload', // Элемент, куда будет выводиться текст с ошибкой
//   errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
//   errorTextClass: 'error' // Класс для элемента с текстом ошибки
// });

// /**
//  * Реализуем валидацию поле ввода загрузки файла через JS
//  */
// pristine.addValidator(initUploadForm.querySelector('#upload-file'));

// initUploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   pristine.validate();

//   const isValidation = pristine.validate();

//   if (isValidation) {
//     console.log('Можно опубликовать');
//   } else {
//     console.log('Форма невалидна');
//   }
// });

// export { pristine };
