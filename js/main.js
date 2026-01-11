import { getAllPhotoUsers } from './create-photos/create-data.js';
import { renderPictures } from './create-photos/thumbnails.js';
import { initUploadForm } from './form-validation/upload-photo-form.js';
import {
  scaleListener,
  resetScale
} from './image-editing/scale.js';
import {
  effectCheckedListener,
  resetEffects
} from './image-editing/slider.js';
import { getData } from './fetch/server-api.js';
import { showAlert } from './fetch/api-message.js';


const photos = getAllPhotoUsers();

renderPictures(photos);
initUploadForm();

scaleListener();
resetScale();
effectCheckedListener();
resetEffects();

getData()
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => showAlert(error.message));
initUploadForm();

