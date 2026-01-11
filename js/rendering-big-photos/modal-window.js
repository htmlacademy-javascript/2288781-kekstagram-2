import {
  toggleClass,
  isEscapeKeydown
} from '../utils.js';

import {
  bigPicture,
  bigPictureButtonClose
} from '../rendering-big-photos/constanta-big-photos.js';

import { getDataArrays } from '../data.js';

import { renderComments } from '../rendering-big-photos/comment-big-photo.js';

import { addDataBigPhoto } from '../rendering-big-photos/big-photos.js';


const { pageBody } = getDataArrays();

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(pageBody, 'modal-open');
};

const onEscKeydown = (event) => {
  if (isEscapeKeydown(event)) {
    event.preventDefault();
    toggleModal();
  }
};

const closePhotoCard = () => {
  bigPictureButtonClose.addEventListener('click', toggleModal());
  document.addEventListener('keydown', onEscKeydown);
};

bigPicture.addEventListener('click', (event) => {
  if (event.target === bigPicture) {
    toggleModal();
  }
});

const showModal = (modal, isShown = true) => {
  if (isShown) {
    return;
  }

  modal.classList.add('hidden');
  pageBody.classList.remove('modal-open');
};

const openModal = (picture) => {
  showModal();
  addDataBigPhoto(picture);
  renderComments(picture.comments);
};

bigPictureButtonClose.addEventListener('click', () => {
  closePhotoCard();
});

export { openModal };
