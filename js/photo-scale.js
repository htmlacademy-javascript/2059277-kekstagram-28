import {previewImage} from './util.js';
import {SCALE_STEP, SCALE_MIN, SCALE_MAX, SCALE_DEFOULT} from './constants.js';

const scaleImage = document.querySelector('.img-upload__scale');
const controlValue = scaleImage.querySelector('.scale__control--value');
const scaleSmaller = scaleImage.querySelector('.scale__control--smaller');
const scaleBigger = scaleImage.querySelector('.scale__control--bigger');

const changeScale = (value) => {
  previewImage.style.transform = `scale(${value / 100})`;
  controlValue.value = `${value}%`;
};

const getSmallerScale = () => {
  const currentValue = parseInt(controlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  changeScale(newValue);
};

const getBiggerScale = () => {
  const currentValue = parseInt(controlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  changeScale(newValue);
};

const resetScale = () => changeScale (SCALE_DEFOULT);

scaleSmaller.addEventListener('click', getSmallerScale);
scaleBigger.addEventListener('click', getBiggerScale);

export {resetScale};
