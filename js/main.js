import { getAllPhotoUsers } from './create-photos/create-data.js';
import { renderPictures } from './create-photos/thumbnails.js';
import { initUploadForm } from './form-validation/upload-photo-form.js';


const photos = getAllPhotoUsers();


renderPictures(photos);

initUploadForm();
