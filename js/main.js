import { getAllPhotoUsers } from './create-photos/create-data.js';
import { renderPictures } from './create-photos/thumbnails.js';
import { initUploadForm } from './form-validation/upload-photo-form.js';
import { scaleListener, resetScale } from './image-editing/scale.js';
import { effectCheckedListener, resetEffects } from './image-editing/slider.js';
import { serverFetch } from './fetch/server.js';

const photos = getAllPhotoUsers();
renderPictures(photos);
scaleListener();
resetScale();
effectCheckedListener();
resetEffects();
initUploadForm();
serverFetch();

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
