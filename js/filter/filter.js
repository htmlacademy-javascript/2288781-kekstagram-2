import {
  debounce
} from '../utils.js';
import {
  renderPictures
} from '../create-photos/thumbnails.js';
import {
  imageFilters,
  SortFunction,
  ButtonValue,
  RANDOM_PHOTO_LIMIT
} from '../filter/filter-data.js';


let pictures = [];
let currentButton = '';

const showFilterPanel = () => {
  imageFilters
    .classList
    .remove('img-filters--inactive');
};

const debounceRender = debounce(renderPictures);

const setActiveFilter = (evt) => {
  const target = evt.target;

  const activeButton = document
    .querySelector('.img-filters__button--active');

  if (!target.matches('button')) {
    return;
  }

  if (target === activeButton) {
    return;
  }

  activeButton
    .classList
    .toggle('img-filters__button--active');

  target
    .classList
    .toggle('img-filters__button--active');

  currentButton = target.id;

  filterChange();
};

function filterChange () {
  let addPhotoThumbnails = [];

  switch (currentButton) {
    case ButtonValue.RANDOM:
      addPhotoThumbnails = pictures
        .toSorted(SortFunction.RANDOM)
        .slice(0, RANDOM_PHOTO_LIMIT);
      break;

    case ButtonValue.DISCUSSED:
      addPhotoThumbnails = pictures
        .toSorted(SortFunction.DISCUSSED);
      break;
    default:
      addPhotoThumbnails = pictures;
  }

  debounceRender(addPhotoThumbnails);
}

const listenerButtonsFilter = (photos) => {
  imageFilters
    .addEventListener('click', setActiveFilter);

  showFilterPanel();

  pictures = photos;
};

export {
  showFilterPanel,
  listenerButtonsFilter
};
