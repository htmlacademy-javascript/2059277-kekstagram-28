const templateThumbnail = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const createThumbnail = ({url, description, likes, comments}) => {
  const userThumbnail = templateThumbnail.cloneNode(true);
  userThumbnail.querySelector('.picture__img').src = url;
  userThumbnail.querySelector('.picture__img').alt = description;
  userThumbnail.querySelector('.picture__likes').textContent = likes;
  userThumbnail.querySelector('.picture__comments').textContent = comments.length;

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
