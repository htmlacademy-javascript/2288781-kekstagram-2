import {
  renderPictures
} from './create-photos/thumbnails.js';
import {
  initPhotoUploadForm
} from './form-validation/upload-photo-form.js';
import {
  scaleListener,
  resetScale
} from './image-editing/scale.js';
import {
  effectCheckedListener,
  resetEffects
} from './image-editing/slider.js';
import {
  getData
} from './fetch/server-api.js';
import {
  showAlert
} from './fetch/api-message.js';
import {
  listenerButtonsFilter
} from './filter/filter.js';
import {
  initPreview
} from './filter/preview.js';

scaleListener();
resetScale();

effectCheckedListener();
resetEffects();

getData()
  .then((data) => {
    renderPictures(data);
    listenerButtonsFilter(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

initPhotoUploadForm();
initPreview();
