import {getRandomInteger, createRandomId, getRandomArrayElement} from './util.js';
import {DESCRIPTION, MESSAGES, NAMES, PHOTO_COUNT, MAX_ID_NUMBER, MAX_COMMENT_NUMBER, MIN_LIKE_NUMBER, MAX_LIKE_NUMBER, COMMENT_COUNT, AVATAR_COUNT} from './constants.js';


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

export {getPhotos};
