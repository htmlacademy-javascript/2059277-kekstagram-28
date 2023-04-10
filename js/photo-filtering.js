import {DISPLAY_PHOTO_COUNT, NUMBER_SORT} from './constants.js';

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filtersForm = document.querySelector('.img-filters__form');
const filtersButton = filtersForm.querySelectorAll('.img-filters__button');

const imageFilter = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let sortedPhotos = [];

const randomSort = () => Math.random() - NUMBER_SORT;

const commentsSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPhoto = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...sortedPhotos].sort(randomSort).slice(0, DISPLAY_PHOTO_COUNT);
    case Filter.DISCUSSED:
      return [...sortedPhotos].sort(commentsSort);
    default:
      return [...sortedPhotos];
  }
};

const onFilterClick = (callback) => {
  filtersForm.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      filtersButton.forEach((item) => item.classList.remove('img-filters__button--active'));
      evt.target.classList.add('img-filters__button--active');
      currentFilter = evt.target.id;
      callback(getFilteredPhoto());
    }
  });
};

const init = (loadedPictures, callback) => {
  imageFilter.classList.remove('img-filters--inactive');
  sortedPhotos = [...loadedPictures];
  onFilterClick(callback);
};

export {getFilteredPhoto, init};
