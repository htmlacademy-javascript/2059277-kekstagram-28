import {renderThumbnails} from './thumbnail.js';
import {getFullSize} from './full-size.js';


const pictureContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const userThumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!userThumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === Number(userThumbnail.dataset.thumbnailId)
    );
    getFullSize(picture);
  });

  renderThumbnails(pictures, pictureContainer);
};

export {renderGallery};
