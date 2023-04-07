export const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

export const ALERT_SHOW_TIME = 5000;


export const DISPLAY_PHOTO_COUNT = 10;

export const NUMBER_SORT = 0.5;


export const NUMBER_COMMENTS_SHOWN = 5;


export const MAX_NUMBER_HASHTAGS = 5;

export const MAX_COMMENT_SYMBOLS = 140;

export const ERROR_MESSAGE = 'Поле заполнено некорректно';

export const ERROR_COMMENT_MAX = 'Максимальная длина комментария - 140 символов';

export const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;


export const SCALE_STEP = 25;

export const SCALE_MIN = 25;

export const SCALE_MAX = 100;

export const SCALE_DEFOULT = 100;

export const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
