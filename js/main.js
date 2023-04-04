// import {getPhotos} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {onFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

// renderThumbnails(getPhotos);
onFormSubmit();

getData()
  .then(renderThumbnails)
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
