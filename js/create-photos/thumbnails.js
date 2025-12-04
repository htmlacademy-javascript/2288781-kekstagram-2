// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ МИНИАТЮР (thumbnails)
// Задача - отобразить фотографии других пользователей

const photosList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция - создаем данные DOM-элемента в блоке .picture
 * @param {string} url - адрес изображения с атрибутом src
 * @param {string} description - описание изображения в атрибуте alt
 * @param {*} likes - количество лайков (блок .picture__likes)
 * @param {*} comments - количество комментариев (блок .picture__comments)
 */
const createThumbnail = ({ url, description, likes, comments, id }) => {
  const clonePhotoFragment = thumbnailTemplate.cloneNode(true);

  const imageElement = clonePhotoFragment.querySelector('.picture__img');
  imageElement.src = url;
  imageElement.alt = description;
  clonePhotoFragment.querySelector('.picture__likes').textContent = likes;
  clonePhotoFragment.querySelector('.picture__comments').textContent = comments.length;
  imageElement.dataset.id = id;

  return clonePhotoFragment;
};

/**
 * Функция - отрисовать сгенерированные DOM-элементы в блоке .pictures
 */
const renderThumbnails = (pictures) => {
  const previewFragment = document.createDocumentFragment(); // вставка элементов

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    previewFragment.append(thumbnail);
  });
  photosList.appendChild(previewFragment);
};

export { renderThumbnails };
