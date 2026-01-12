import { renderPictures } from './create-photos/thumbnails.js';
import { initForm } from './form-validation/upload-photo-form.js';
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


scaleListener();
resetScale();
effectCheckedListener();
resetEffects();

getData()
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => showAlert(error.message));

initForm();

