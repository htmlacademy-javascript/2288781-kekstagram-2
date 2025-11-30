import { getAllPhotoUsers } from '/js/create-photos/create-data.js';
import { renderPictures } from '/js/create-photos/thumbnails.js';
import { renderItemDetails } from '/js/rendering-big-photos/modal-window.js';

// Получаем данные
const getPhotosArray = getAllPhotoUsers();

// Создаем и выводим элементы на страницу
renderPictures(getPhotosArray);

const pictures = document.querySelector('.pictures');

const onPictureClick = (evt) => {
  if(evt.target.closest('.picture')) {
    renderItemDetails(getPhotosArray[evt.target.id - 1]);
  }
};
pictures.addEventListener('click', onPictureClick);
