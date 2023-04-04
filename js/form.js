import {resetScale} from './photo-scale.js';
import {resetEffects} from './photo-effects.js';
import {isEscapeKey, body} from './util.js';
import {MAX_NUMBER_HASHTAGS, MAX_COMMENT_SYMBOLS, ERROR_MESSAGE, ERROR_COMMENT_MAX, VALID_SYMBOLS} from './constants.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('#upload-file');
const editForm = form.querySelector('.img-upload__overlay');
const closeEditButton = form.querySelector('.img-upload__cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});


const isValidHashtag = (tag) => VALID_SYMBOLS.test(tag);

const isValidNumber = (tags) => (tags.length <= MAX_NUMBER_HASHTAGS);

const hasUniqueHashtag = (tags) => {
  const lowerCaseHashtag = tags.map((tag) => tag.toLowerCase());
  return lowerCaseHashtag.length === new Set(lowerCaseHashtag).size;
};

const validateHashtags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return isValidNumber(tags) && hasUniqueHashtag(tags) && tags.every(isValidHashtag);
};

pristine.addValidator(
  hashtagField,
  validateHashtags,
  ERROR_MESSAGE
);

const validateComments = (value) => value.length <= MAX_COMMENT_SYMBOLS;

pristine.addValidator(
  commentField,
  validateComments,
  ERROR_COMMENT_MAX
);


const openEditForm = () => {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeEditForm = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt) && !(document.activeElement === hashtagField || document.activeElement === commentField)) {
    evt.preventDefault();
    closeEditForm();
  }
}

closeEditButton.addEventListener('click', closeEditForm);

uploadFile.addEventListener('change', () => openEditForm ());

const onFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    if (pristine.validate()) {
      form.submit();
    }
    evt.preventDefault();
  });
};

export {onFormSubmit};
