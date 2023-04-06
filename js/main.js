import {renderThumbnails} from './thumbnail.js';
import {onFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {closeEditForm} from './form.js';

getData()
  .then(renderThumbnails)
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

onFormSubmit(closeEditForm);
