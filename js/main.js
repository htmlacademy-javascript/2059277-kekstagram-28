import {getPhotos} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {getUploadFile} from './form.js';

renderThumbnails(getPhotos);
getUploadFile();
