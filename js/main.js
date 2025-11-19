// точка входа - модуль, который связывает другие модули

import { getAllPhotoUsers } from './create-photos/create-data.js';
import { createPhotos } from './create-photos/thumbnails.js';

const photosArray = getAllPhotoUsers();
createPhotos(photosArray);
