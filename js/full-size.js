const bigPicture = document.querySelector('.big-picture');

const createBigPicture = ({url, description, likes, comments}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

const modalCloseElement = bigPicture.querySelector('.big-picture__cancel');
const body = bigPicture.querySelector('body');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
};

modalCloseElement.addEventListener('click', () => closeUserModal());

const getFullSize = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscapeKeydown);
  createBigPicture(data);
};

export {getFullSize};
