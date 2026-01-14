import {
  template,
  commentsList,
  COMMENTS_LIMIT,
  bigImageShownCommentsCount,
  bigImageLoader
} from '../rendering-big-photos/constanta-big-photos.js';


let localComments;
let shownComments;

const renderComment = ({ avatar, message, name }) => {
  const newMessage = template.cloneNode(true);
  const userPicture = newMessage.querySelector('.social__picture');
  userPicture.src = avatar;
  userPicture.alt = name;
  newMessage.querySelector('.social__text').textContent = message;
  userPicture.width = 35;
  userPicture.height = 35;
  return newMessage;
};

const renderStatistic = () => {
  bigImageShownCommentsCount.textContent = shownComments;
};

const renderLoader = () => {
  if (localComments.length){
    bigImageLoader.classList.remove('hidden');
  } else{
    bigImageLoader.classList.add('hidden');
  }
};

const renderPortion = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_LIMIT).forEach((item) => {
    fragment.append(renderComment(item));
    shownComments++;
  });
  commentsList.append(fragment);

  renderStatistic();
  renderLoader();
};

export const renderComments = (comments) => {
  commentsList.innerHTML = '';
  shownComments = 0;
  localComments = [...comments];
  renderPortion();
};

bigImageLoader.addEventListener('click', () => {
  renderPortion();
});
