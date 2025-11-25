// ГЛАВНЫЙ МОДУЛЬ И ТОЧКА ВХОДА - модуль, который связывает другие модули

import { getAllPhotoUsers } from '/js/create-photos/create-data.js';
import { renderPictures } from '/js/create-photos/thumbnails.js';

const getPhotosArray = getAllPhotoUsers();
renderPictures(getPhotosArray);
