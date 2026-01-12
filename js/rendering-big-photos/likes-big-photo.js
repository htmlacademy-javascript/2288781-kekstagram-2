import { getDataArrays } from '../data.js';

const { LIKES } = getDataArrays();


const heartBigPhotos = document.querySelector('.social__likes');
export const likesNumber = document.querySelector('.likes-count');
// let counter = [LIKES.MIN, LIKES.MAX];

heartBigPhotos.onclick = () => {
  if (heartBigPhotos.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  // likesNumber.textContent = counter;
  heartBigPhotos.classList.toggle('added');
};
