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

const PHOTO_COUNT = 21;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);

const generateCommentId = createRandomIdFromRangeGenerator(1, 300);

const generateAvatarNumber = createRandomIdFromRangeGenerator(1, 6);

const getComment = () => ({
  id: generateCommentId,
  avatar: `img/avatar-${generateAvatarNumber}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: createRandomIdFromRangeGenerator(1, 25),
  url: `photos/${generatePhotoId}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: createRandomIdFromRangeGenerator(15, 200),
  comments: getComment(),
});

const getPhotos = Array.from({length: PHOTO_COUNT}, createPhoto);

getPhotos();
