import { getAllPhotoUsers } from './create-photos/create-data.js';
import { renderPictures } from './create-photos/thumbnails.js';
import { initUploadForm } from './form-validation/upload-photo-form.js';
import { scaleListener } from './image-editing/scale.js';
import { effectCheckedListener } from './image-editing/slider.js';

const photos = getAllPhotoUsers();
renderPictures(photos);

scaleListener();
effectCheckedListener();
initUploadForm();
