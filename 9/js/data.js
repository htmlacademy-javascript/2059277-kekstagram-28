import {getRandomInteger, createRandomId, getRandomArrayElement} from './util.js';

const NUMBER_COMMENTS_SHOWN = 5;


const MAX_NUMBER_HASHTAGS = 5;

const MAX_COMMENT_SYMBOLS = 140;

const ERROR_MESSAGE = 'Поле заполнено некорректно';

const ERROR_COMMENT_MAX = 'Максимальная длина комментария - 140 символов';

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;


const SCALE_STEP = 25;

const SCALE_MIN = 25;

const SCALE_MAX = 100;

const SCALE_DEFOULT = 100;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min:0,
    max:0,
    step:0,
    unit:'',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min:0,
    max:1,
    step:0.1,
    unit:'',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min:0,
    max:1,
    step:0.1,
    unit:'',
  },
  {
    name: 'marvin',
    style: 'invert',
    min:0,
    max:100,
    step:1,
    unit:'%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min:0,
    max:3,
    step:0.1,
    unit:'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min:1,
    max:3,
    step:0.1,
    unit:'',
  },
];


const DESCRIPTION = [
  'Никогда не отказывайся от своей мечты. Продолжай спать',
  'Умный человек решает проблемы, а мудрый в них старается не попадать',
  'Когда я прочитал о вреде пьянства, то бросил читать.',
  'Я тоже участвую в марафонах. На Netflix.',
  'Необязательно всем нравится. Не все люди имеют значение.',
  'Меня не волнуют, что думают обо мне люди. Комары находят меня привлекательным.',
  'Некоторые дни начинаются лучше, чем другие.',
  'Я не ленив, просто нахожусь в привычном для себя энергосберегающем режиме',
  'Я обещаю, что это не последнее фото, которое я публикую сегодня.',
  'Упади 1000 раз, но поднимись 1001 раз.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Анатолий',
  'Виталий',
  'Екатерина',
  'Антонина',
  'Ольга',
  'Леонид',
  'Павел',
  'Иннокентий',
  'Галина',
  'Фёдор',
];

const PHOTO_COUNT = 25;

const MAX_ID_NUMBER = 25;

const MAX_COMMENT_NUMBER = 200;

const MIN_LIKE_NUMBER = 15;

const MAX_LIKE_NUMBER = 200;

const COMMENT_COUNT = 100;

const AVATAR_COUNT = 6;


const photoId = createRandomId(1, MAX_ID_NUMBER);

const photoIdNumber = createRandomId(1, MAX_ID_NUMBER);

const commentId = createRandomId(1, MAX_COMMENT_NUMBER);

const commentNumber = createRandomId(0, COMMENT_COUNT);

const likeNumber = createRandomId(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER);


const getComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: photoId(),
  url: `photos/${photoIdNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: likeNumber(),
  comments: Array.from({length: commentNumber()}, getComment),
});

const getPhotos = Array.from({length: PHOTO_COUNT}, createPhoto);

export {getPhotos, MAX_NUMBER_HASHTAGS, MAX_COMMENT_SYMBOLS, ERROR_MESSAGE, ERROR_COMMENT_MAX, VALID_SYMBOLS, NUMBER_COMMENTS_SHOWN, SCALE_STEP, SCALE_MIN, SCALE_MAX, SCALE_DEFOULT, EFFECTS};
