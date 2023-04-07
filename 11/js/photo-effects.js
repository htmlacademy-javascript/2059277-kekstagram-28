import {previewImage} from './util.js';
import {EFFECTS} from './constants.js';

const EFFECT_DEFAULT = EFFECTS[0];
let currentEffect = EFFECT_DEFAULT;

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const isDefault = () => currentEffect === EFFECT_DEFAULT;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const closeSlider = () => {
  sliderContainer.classList.add('hidden');
};

const changeSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  if (isDefault()) {
    closeSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    changeSlider();
  }
};

const onSliderChange = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  previewImage.style.filter = isDefault()
    ? EFFECT_DEFAULT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectLevel.value = sliderValue;
};


const resetEffects = () => {
  currentEffect = EFFECT_DEFAULT;
  changeSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});

closeSlider ();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderChange);

export {resetEffects};
