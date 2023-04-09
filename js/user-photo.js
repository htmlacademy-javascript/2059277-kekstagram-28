import {FILE_TYPES} from './constants.js';
import {previewImage, uploadFile} from './util.js';

const getUserPhoto = () => {
  uploadFile.addEventListener('change', () => {
    const file = uploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      previewImage.src = URL.createObjectURL(file);
    }
  });
};

export {getUserPhoto};
