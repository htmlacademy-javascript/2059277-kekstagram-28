import {NUMBER_COMMENTS_SHOWN} from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

let commentsShown = 0;
let totalComments = [];

const renderComments = () => {
  const maxComments = commentsShown + NUMBER_COMMENTS_SHOWN;
  if (totalComments.length <= maxComments) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsCounter.innerHTML = `${Math.min(totalComments.length, maxComments)} из ${totalComments.length} комментариев`;

  totalComments.slice(commentsShown, maxComments).forEach(({avatar, name, message}) => {
    const userComment = socialComment.cloneNode(true);
    userComment.querySelector('.social__picture').src = avatar;
    userComment.querySelector('.social__picture').alt = name;
    userComment.querySelector('.social__text').textContent = message;
    socialCommentsList.append(userComment);
  });
};

commentsLoader.addEventListener('click', () => {
  commentsShown += NUMBER_COMMENTS_SHOWN;
  renderComments();
});

const getComments = (data) => {
  socialCommentsList.innerHTML = '';
  commentsShown = 0;
  totalComments = data.comments;
  renderComments();
};

export {getComments};
