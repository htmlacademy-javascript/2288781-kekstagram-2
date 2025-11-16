import { createPhotos } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const newPictures = createPhotos();
const DocumentFragment = document.createDocumentFragment();

newPictures.forEach(({ url, description, likes, comments }) => {
  const newPictureElement = pictureTemplate.cloneNode(true);
  const newPicturesImage = newPictureElement.querySelector('.picture__img');
  newPicturesImage.setAttribute('src', url);
  newPicturesImage.setAttribute('alt', description);
  newPictureElement.querySelector('.picture__likes').textContent = likes;
  newPictureElement.querySelector('.picture__comments').textContent = comments.length;
  DocumentFragment.append(newPictureElement);
});

// Отрисовать сгенерированные DOM-элементы в блок .pictures
pictures.append(DocumentFragment);
