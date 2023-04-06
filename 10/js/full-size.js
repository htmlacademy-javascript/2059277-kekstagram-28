import {getComments} from './render-comments.js';
import {onEscapeKeydown, body} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const modalCloseElement = bigPicture.querySelector('.big-picture__cancel');

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

document.addEventListener('keydown', (evt) => {
  onEscapeKeydown(evt, closeUserModal);
});

const getFullSize = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  createBigPicture(data);
  getComments(data);
};

export {getFullSize};
