import {
  bigPicture,
  pageBody,
  bigPictureButtonClose
} from '../rendering-big-photos/constanta-big-photos.js';
import {
  renderComments
} from '../rendering-big-photos/comment-big-photo.js';
import {
  addDataBigPhoto
} from '../rendering-big-photos/big-photos.js';
import {
  registerWindow,
  removeRegistrationWindow
} from '../keydown-controller.js';

function showModal (isVisible = true) {
  if (isVisible) {
    bigPicture
      .classList
      .remove('hidden');
    pageBody
      .classList
      .add('modal-open');
  } else {
    bigPicture
      .classList
      .add('hidden');
    pageBody
      .classList
      .remove('modal-open');
  }
}

const openModal = (picture) => {
  showModal();
  addDataBigPhoto(picture);
  renderComments(picture.comments);
  registerWindow(() => {
    showModal(false);
  });
};

bigPictureButtonClose.addEventListener('click', () => {
  showModal(false);
  removeRegistrationWindow();
});

export { openModal };
