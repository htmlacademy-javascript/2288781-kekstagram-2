// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ МИНИАТЮР (thumbnails)

import { openModal } from '../rendering-big-photos/modal-window.js';

import {
  dataErrorTemplate,
  dataError,
  DATA_ERROR_TIMEOUT
} from '../fetch/server-data.js';

import { getDataArrays } from '../data.js';

import { getData } from '../fetch/server.js';

import { showErrorMessage } from '../fetch/show-alert.js';

const { MAX_PHOTOS } = getDataArrays();
const pictureTemplateFragment = document.querySelector('#picture').content;
const pictureTemplate = pictureTemplateFragment.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const { pageBody } = getDataArrays();

let localPictures;

export const renderPictures = (pictures) => {
  localPictures = [...pictures];
  const documentFragment = document.createDocumentFragment();

  pictures.forEach(({ id, url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.dataset.id = id;

    const isImage = pictureElement.querySelector('.picture__img');
    isImage.src = url;
    isImage.alt = description;

    const pictureElementInfo = pictureElement.querySelector('.picture__info');
    pictureElementInfo.querySelector('.picture__likes').textContent = likes;
    pictureElementInfo.querySelector('.picture__comments').textContent = comments.length;

    documentFragment.appendChild(pictureElement);
  });

  picturesContainer.append(documentFragment);
};

const onPictureClick = (event) => {
  const card = event.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPictures.find((item) => item.id === id);
    openModal(photo);
  }
};

picturesContainer.addEventListener('click', onPictureClick);

const showDataErrorMessage = () => {
  showErrorMessage();
  dataErrorTemplate.cloneNode(true);
  pageBody.appendChild(dataErrorTemplate);

  setTimeout(() => {
    const message = dataError();
    if (message) {
      message.remove();
    }
  }, DATA_ERROR_TIMEOUT);
};

// getData()
//   .then((dataset) => {
//     renderPictures(dataset.slice(0, MAX_PHOTOS));
//   })
//   .catch(
//     (error) => {
//       showDataErrorMessage(error.message);
//     }
//   );
