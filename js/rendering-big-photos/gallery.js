import { getAllPhotoUsers } from '/js/create-photos/create-data.js';
import { renderPictures } from '/js/create-photos/thumbnails.js';
import { renderItemDetails } from '/js/rendering-big-photos/modal-window.js';

// Получаем данные
const photos = getAllPhotoUsers();

// Создаем и выводим элементы на страницу
renderPictures(photos);

const pictures = document.querySelector('.pictures');

const onPictureClick = (evt) => {
  const card = evt.target.closest('.picture');
  if(card) {
    const id = Number(card.dataset.id);
    const photo = photos.find((item) => item.id === id);
    renderItemDetails(photo);
  }
};
pictures.addEventListener('click', onPictureClick);
