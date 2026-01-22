const SortFunction = {
  GET_RANDOM: () => 0.5 - Math.random(),
  GET_DISCUSSED: (a, b) => b.comments.length - a.comments.length,
};

const ButtonValue = {
  RANDOM: 'filter-random',
  DISCUSS: 'filter-discussed',
};

const RANDOM_PHOTO_LIMIT = 10;

const imageFilters = document
  .querySelector('.img-filters');

export {
  SortFunction,
  ButtonValue,
  RANDOM_PHOTO_LIMIT,
  imageFilters
};
