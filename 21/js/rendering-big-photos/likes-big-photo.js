const heartBigPhotos = document.querySelector('.social__likes');
const likesNumber = document.querySelector('.likes-count');

heartBigPhotos.onclick = () => {
  if (heartBigPhotos.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heartBigPhotos.classList.toggle('added');
};

export { likesNumber };
