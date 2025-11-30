import { toggleClass, isEscapeKeydown, isEnterKeydown } from '../utils.js';
import { renderItemDetails } from '/js/rendering-big-photos/modal-window.js';

// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ ОКНА С ПОЛНОРАЗМЕРНЫМ ИЗОБРАЖЕНИЕМ

// Задача - реализовать сценарий просмотра фотографий в полноразмерном режиме.
// В таком режиме пользователь получает несколько дополнительных возможностей:
// - детально рассмотреть изображение,
// - поставить «лайк»,
// - почитать комментарии, оставленные другими пользователями

const body = document.querySelector('body');
const photoContainer = document.querySelector('.big-picture');
const photoCloseButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    toggleModal();
  }
};

const toggleModal = () => {
  toggleClass(photoContainer, 'hidden');
  toggleClass(body, 'modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showBigPhotos = (itemData) => {
  photoContainer.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderItemDetails(itemData, photoContainer);
};

photoCloseButton.addEventListener('click', () => {
  toggleModal();
});

photoCloseButton.addEventListener('keydown', (evt) => {
  if (isEnterKeydown(evt)) {
    toggleModal();
  }
});

export { showBigPhotos };
