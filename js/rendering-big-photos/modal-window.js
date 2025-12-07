import { toggleClass, isEscapeKeydown, isEnterKeydown } from '../utils.js';
import { bigPicture, isBody, socialComment, bigImageLoader, bigPictureButtonClose, commentsList, bigImageShownCommentsCount } from '/js/rendering-big-photos/constanta-big-photos.js';
import { updateCommentSection } from '/js/rendering-big-photos/comment-big-photo.js';
import { addDataBigPhoto } from '/js/rendering-big-photos/big-photos.js';
import { likesNumber } from '/js/rendering-big-photos/likes-big-photo.js';

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Закрывает фотокарточку с полноразмерным фотографией
const toggleModal = () => {
  // После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
  toggleClass(bigPicture, 'hidden');
  // Показываем окно
  toggleClass(isBody, 'modal-open');

  // Сбрасывает при закрытии
  socialComment.innerHTML = '';
  bigImageLoader.removeEventListener('click', updateCommentSection);
};

/**
 * Обработчик нажатия клавиши Esc - кнопка закрытия с помощью Tab
 * @param {Event} evt - объект события
 */
const onEscKeydown = (evt) => {
  if (isEscapeKeydown(evt)) {
    evt.preventDefault();
    toggleModal();
  }
};

/**
 * Обработчик клика по кнопке с крестиком
 */
const closePhotoCard = () => {
  bigPictureButtonClose.addEventListener('click', toggleModal());
  document.addEventListener('keydown', onEscKeydown);
};

/**
 * Обработчик клика вокруг модального окна
 * @param {Event} evt
 */
bigPicture.addEventListener('click', (evt) => {
  if (evt.target === bigPicture) {
    toggleModal();
  }
});

/**
 * Открывает фотокарточку
 * @param {*} picture - объект с данными фотографии
 */
const openModal = (picture) => {
  // Открывает окно
  bigPicture.classList.remove('hidden');
  isBody.classList.add('modal-open');

  // eslint-disable-next-line no-use-before-define
  document.addEventListener('keydown', onEnterKeydown);

  // Заполняет данными фотокарточку
  addDataBigPhoto(picture);
  updateCommentSection(picture.comments);

  // Обработчик лайков
  likesNumber(picture);

  // Инициализирует комменатрии
  const currentComments = picture.comments;
  commentsList.innerHTML = '';

  const TotalCommentsCount = currentComments.length;
  bigPicture.querySelector('.social__comment-total-count').textContent = TotalCommentsCount;

  // Загружает первую порцию комментариев
  updateCommentSection();

  // Настраивает видимость блоков
  bigImageShownCommentsCount.classList.remove('hidden'); // cчетчик видим
  // bigImageLoader.classList.remove('hidden'); // видимость счетчика управляет updateCommentSection

  // Обработчик кнопки "Загрузить еще"
  bigImageLoader.addEventListener('click', updateCommentSection);
};

/**
 * Обработчик нажатия клавиши Enter - кнопка открытия с помощью Tab
 * @param {Event} evt - объект события
 */
const onEnterKeydown = (evt) => {
  if (isEnterKeydown(evt)) {
    evt.preventDefault();
    openModal();
  }
};

// Обработчик кнопки закрытия
bigPictureButtonClose.addEventListener('click', () => {
  closePhotoCard();
});

export { openModal };
