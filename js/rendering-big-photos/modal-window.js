import { toggleClass, isEscapeKeydown } from '../utils.js';
import { bigPicture, body, bigPictureButtonClose } from '../rendering-big-photos/constanta-big-photos.js';
import { renderComments } from '../rendering-big-photos/comment-big-photo.js';
import { addDataBigPhoto } from '../rendering-big-photos/big-photos.js';

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(body, 'modal-open');
};

const onEscKeydown = (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.preventDefault();
    toggleModal();
  }
};

const closePhotoCard = () => {
  bigPictureButtonClose.addEventListener('click', toggleModal());
  document.addEventListener('keydown', onEscKeydown);
};

bigPicture.addEventListener('click', (evt) => {
  if (evt.target === bigPicture) {
    toggleModal();
  }
});

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
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
