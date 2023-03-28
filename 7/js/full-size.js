import {getComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const modalCloseElement = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
};

const createBigPicture = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

modalCloseElement.addEventListener('click', () => closeUserModal());
document.addEventListener('keydown', onEscapeKeydown);

const getFullSize = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  createBigPicture(data);
  getComments(data);
};

export {getFullSize};
