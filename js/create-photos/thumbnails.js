// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ МИНИАТЮР (thumbnails)
// Задача - отобразить фотографии других пользователей

const photosList = document.querySelector('.pictures'); // cписок с фотографиями
const photosFragment = document.createDocumentFragment(); // вставка элементов
const photoFragment = document.querySelector('#picture').content; // шаблон изображения случайного пользователя

const photoTemplate = photoFragment.querySelector('.picture'); // одна фотография
const imageElement = photoFragment.querySelector('.picture__img');
const likesElement = photoFragment.querySelector('.picture__likes');
const commentsElement = photoFragment.querySelector('.picture__comments');

/**
 * Функция - отрисовать сгенерированные DOM-элементы в блоке .pictures
 * @param {string} url - адрес изображения с атрибутом src
 * @param {string} description - описание изображения в атрибуте alt
 * @param {*} likes - количество лайков (блок .picture__likes)
 * @param {*} comments - количество комментариев (блок .picture__comments)
 */
const renderPhotos = (element) => {
  const clonePhotoFragment = photoTemplate.cloneNode(true);

  element.forEach(({ id, url, description, likes, comments }) => {
    photoTemplate.dataset.id = id;
    imageElement.src = url;
    imageElement.alt = description;
    likesElement.textContent = likes;
    commentsElement.textContent = comments.length;

    photosFragment.appendChild(clonePhotoFragment);
  });

  photosList.appendChild(photosFragment);
};

export { renderPhotos };
