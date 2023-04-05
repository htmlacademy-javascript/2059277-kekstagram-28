import {isEscapeKey, body} from './util.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const successMessage = templateSuccess.cloneNode(true);
const errorMessage = templateError.cloneNode(true);


const closeSuccessMessage = () => {
  successMessage.remove();
};

const closeErrorMessage = () => {
  errorMessage.remove();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
    closeErrorMessage();
  }
};

const onClick = () => {
  closeSuccessMessage();
  closeErrorMessage();
};

const getSuccessMessage = () => {
  body.append(successMessage);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onClick);
};

const getErrorMessage = () => {
  body.append(errorMessage);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onClick);
};

export {getSuccessMessage, getErrorMessage};
