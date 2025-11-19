/**
 * Список с фотографиями
 */
const pictureList = document.querySelector('.pictures');

/**
 * Шаблон для фотографии
 */
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Фрагмент
 */
const pictureFragment = document.createDocumentFragment();

/**
 * Отрисовать сгенерированные DOM-элементы в блоке .pictures
 */
export const createPhotos = (datesArray) => {
  datesArray.forEach(({ url, description, likes, comments }) => {
    const picturesListItem = pictureTemplate.cloneNode(true);
    const image = picturesListItem.querySelector('.picture__img');
    image.setAttribute('src', url);
    image.setAttribute('alt', description);
    const likesNumber = picturesListItem.querySelector('.picture__likes');
    likesNumber.textContent = likes;
    const commentsNumber = picturesListItem.querySelector('.picture__comments');
    commentsNumber.textContent = comments.length;
    pictureFragment.append(picturesListItem);
  });

  return pictureList.append(pictureFragment);
};


