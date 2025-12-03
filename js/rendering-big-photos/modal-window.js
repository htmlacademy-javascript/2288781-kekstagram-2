// + 2. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
// + 3. Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия

import { toggleClass, isEscapeKeydown } from '../utils.js';
import { isBody, bigPicture, bigImageButtonClose, bigImageTotalComment, bigImageLoader } from '/js/rendering-big-photos/const-big-photos.js';

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(isBody, 'modal-open');

  bigImageTotalComment.classList.remove('hidden');
  bigImageLoader.classList.remove('hidden');

  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onDocumentKeydown);
};

// Обработчик нажатия клавиши
export const onDocumentKeydown = (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.preventDefault();
    toggleModal();
  }
};

// Обработчик клика по кнопке с крестиком
bigImageButtonClose.addEventListener('click', toggleModal);

// Обработчик клика вокруг модального окна
bigPicture.addEventListener('click', (evt) => {
  if (evt.target === bigPicture) {
    toggleModal();
  }
});


