import {getPhotos} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {onFormSubmit} from './form.js';

renderThumbnails(getPhotos);
onFormSubmit();
