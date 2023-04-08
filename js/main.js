import {renderThumbnails} from './thumbnail.js';
import {onFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {closeEditForm} from './form.js';
import {getFilteredPhoto, init} from './photo-filtering.js';


getData()
  .then((data) => {
    const debouncedRenderThumbnails = debounce(renderThumbnails);
    init(data, debouncedRenderThumbnails);
    renderThumbnails(getFilteredPhoto());
  }).catch(
    (err) => {
      showAlert(err.message);
    }
  );

onFormSubmit(closeEditForm);
