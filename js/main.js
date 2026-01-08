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
