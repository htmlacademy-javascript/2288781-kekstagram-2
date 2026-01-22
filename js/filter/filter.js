import {
  debounce
} from '../utils.js';
import {
  renderPictures
} from '../create-photos/thumbnails.js';
import {
  SortFunction,
  ButtonValue,
  RANDOM_PHOTO_LIMIT,
  imageFilters
} from '../filter/filter-data.js';

let pictures = [];
let currentButton = '';

const showFilterPanel = () => {
  imageFilters
    .classList
    .remove('img-filters--inactive');
};

const debounceRender = debounce(renderPictures);

const onFilterClick = (evt) => {
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
        .toSorted(SortFunction.GET_RANDOM)
        .slice(0, RANDOM_PHOTO_LIMIT);
      break;

    case ButtonValue.DISCUSS:
      addPhotoThumbnails = pictures
        .toSorted(SortFunction.GET_DISCUSSED);
      break;
    default:
      addPhotoThumbnails = pictures;
  }

  debounceRender(addPhotoThumbnails);
}

const listenerButtonsFilter = (photos) => {
  imageFilters
    .addEventListener('click', onFilterClick);

  showFilterPanel();

  pictures = photos;
};

export {
  showFilterPanel,
  listenerButtonsFilter
};
