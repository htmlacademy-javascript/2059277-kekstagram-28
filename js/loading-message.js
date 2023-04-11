import {isEscapeKey, body} from './util.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const closeMessage = () => {
  body.lastChild.remove();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.lastChild.remove();
    document.removeEventListener('click', onDocumentKeydown);
  }
};

const onClick = (evt) => {
  if (evt.target === body.lastChild) {
    body.lastChild.remove();
    document.removeEventListener('click', onClick);
  }
};

const getMessage = (message) => {
  const successMessage = templateSuccess.cloneNode(true);
  const errorMessage = templateError.cloneNode(true);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onClick);

  if (message) {
    body.append(errorMessage);
    const errorButton = document.querySelector('.error__button');
    errorButton.addEventListener('click', closeMessage);

    return message;
  } else {
    body.append(successMessage);
    const successButton = document.querySelector('.success__button');
    successButton.addEventListener('click', closeMessage);

    return message;
  }
};

export {getMessage};
