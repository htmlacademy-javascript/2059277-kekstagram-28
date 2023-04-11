import {DELAY_TIME} from './constants.js';
import {renderThumbnails} from './thumbnail.js';
import {onFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {closeEditForm} from './form.js';
import {getFilteredPhoto, init} from './photo-filtering.js';
import {getUserPhoto} from './user-photo.js';


getData()
  .then((data) => {
    const debouncedRenderThumbnails = debounce(renderThumbnails, DELAY_TIME);
    init(data, debouncedRenderThumbnails);
    renderThumbnails(getFilteredPhoto());
  }).catch(
    (err) => {
      showAlert(err.message);
    }
  );

onFormSubmit(closeEditForm);

getUserPhoto();
