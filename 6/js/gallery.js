import {getPhotos} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {getFullSize} from './full-size.js';

const pictureContainer = document.querySelector('.pictures');

const renderGallery = () => {
  pictureContainer.addEventListener('click', (evt) => {
    const userThumbnail = evt.target.closest('.picture');
    if (!userThumbnail) {
      return;
    }

    const picture = getPhotos.find(
      (item) => item.id === Number(userThumbnail.dataset.thumbnailId)
    );
    getFullSize(picture);
  });

  renderThumbnails(getPhotos);
};

export {renderGallery};
