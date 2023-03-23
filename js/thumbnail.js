import {getFullSize} from './full-size.js';

const templateThumbnail = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const userThumbnail = templateThumbnail.cloneNode(true);
  userThumbnail.querySelector('.picture__img').src = photo.url;
  userThumbnail.querySelector('.picture__img').alt = photo.description;
  userThumbnail.querySelector('.picture__likes').textContent = photo.likes;
  userThumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  userThumbnail.dataset.thumbnailId = photo.id;

  userThumbnail.addEventListener('click', () => getFullSize(photo));

  return userThumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const userThumbnail = createThumbnail(picture);
    fragment.append(userThumbnail);
  });
  pictureContainer.append(fragment);
};

export {renderThumbnails};
