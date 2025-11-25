// ГЛАВНЫЙ МОДУЛЬ И ТОЧКА ВХОДА - модуль, который связывает другие модули

import { getAllPhotoUsers } from '../create-photos/create-data.js';
import { renderPictures } from '../create-photos/thumbnails.js';

const photosArray = getAllPhotoUsers();
renderPictures(photosArray);
