const heartBigPhotos = document.querySelector('.social__likes');
const likesNumber = document.querySelector('.likes-count');
const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {
  const pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', String(!pressed));
});

heartBigPhotos.onclick = () => {
  if (heartBigPhotos.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heartBigPhotos.classList.toggle('added');
};
