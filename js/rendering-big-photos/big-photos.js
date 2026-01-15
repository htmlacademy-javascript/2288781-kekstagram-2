import {
  bigImage,
  bigImageLikes,
  bigImageShownCommentsCount,
  bigImageTotalCommentsCount,
  bigImageCaption
} from '../rendering-big-photos/constanta-big-photos.js';
import {
  bigImage,
  bigImageLikes,
  bigImageShownCommentsCount,
  bigImageTotalCommentsCount,
  bigImageCaption
} from '../rendering-big-photos/constanta-big-photos.js';

export const addDataBigPhoto = (data) => {
  const { url, description, likes, comments } = data;
  bigImage.src = url;
  bigImage.alt = description;
  bigImageLikes.textContent = likes;
  bigImageShownCommentsCount.textContent = 0; // временно не показываем
  bigImageTotalCommentsCount.textContent = comments.length;
  bigImageCaption.textContent = description;
};

bigImageLikes.addEventListener('click', (target) => {
  if (target === bigImageLikes) {
    addDataBigPhoto();
  }
});
