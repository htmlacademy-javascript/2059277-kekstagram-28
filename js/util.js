import {ALERT_SHOW_TIME} from './constants.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscapeKeydown = (evt, onClose) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onClose();
  }
};

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.classList.add('show-alert');
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};


const body = document.querySelector('body');

const previewImage = document.querySelector('.img-upload__preview img');

const uploadFile = document.querySelector('#upload-file');

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {isEscapeKey, onEscapeKeydown, showAlert, debounce, body, previewImage, uploadFile};
