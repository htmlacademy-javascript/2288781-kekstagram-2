// МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА ОТРИСОВКУ МИНИТЮР (thumbnails)
// Задача - отобразить фотографии других пользователей

// Шаблон изображения случайного пользователя
const pictureTemplateFragment = document.querySelector('#picture').content;
// Одна фотография
const pictureTemplate = pictureTemplateFragment.querySelector('.picture');
// Список с фотографиями
const picturesList = document.querySelector('.pictures');

/**
 * Функция - отрисовать сгенерированные DOM-элементы в блоке .pictures
 * @param {string} url - адрес изображения с атрибутом src
 * @param {string} description - описание изображения в атрибуте alt
 * @param {*} likes - описание лайков (блок .picture__likes)
 * @param {*} comments - количество комментариев (блок .picture__comments)
 * @param {*} DocumentFragment - вставка элементов
 */
const renderPictures = (element) => {
  const DocumentFragment = document.createDocumentFragment();
  // eslint-disable-next-line no-console
  console.log(element);
  element.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const isImage = pictureElement.querySelector('.picture__img');
    isImage.src = url;
    isImage.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    DocumentFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(DocumentFragment);
};

export { renderPictures };
