import { getAllPhotoUsers } from '../create-photos/create-data.js';
import { renderPictures } from '../create-photos/thumbnails.js';

const photos = getAllPhotoUsers();
renderPictures(photos);
