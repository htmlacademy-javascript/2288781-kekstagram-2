const imageFilters = document.querySelector('.img-filters');

const SortFunction = {
  RANDOM: () => 0.5 - Math.random(),
  DISCUSSED: (a, b) => b.comments.length - a.comments.length
};

const ButtonValue = {
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const RANDOM_PHOTO_LIMIT = 10;

export {
  imageFilters,
  SortFunction,
  ButtonValue,
  RANDOM_PHOTO_LIMIT
};
