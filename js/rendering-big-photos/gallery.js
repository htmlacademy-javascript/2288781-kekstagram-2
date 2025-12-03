// + Подключите модуль в проект - gallery.js

/*
Как связать модули миниатюр и полноразмерного режима?
Задача не имеет одного верного решения, поэтому будет правильным как использование третьего модуля
для связки двух других, так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая
работа с интерфейсом этого модуля, addEventListener и замыканиями. Последнее решение похоже
на демонстрацию по учебному проекту. А первое — с третьим модулем — более сложное из-за отсутствия
примера, но самостоятельное. В качестве третьего модуля можно выбрать точку входа, а можно завести
отдельный модуль, например «Галерея». Решение за вами.
*/

import { getAllPhotoUsers } from '/js/create-photos/create-data.js';
import { renderPictures } from '/js/create-photos/thumbnails.js';
import { openModal } from '/js/rendering-big-photos/big-photos.js';

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
    openModal(photo);
  }
};
pictures.addEventListener('click', onPictureClick);
