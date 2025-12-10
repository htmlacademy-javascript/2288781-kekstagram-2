import { template, commentsList } from '../rendering-big-photos/constanta-big-photos.js';

let localComments;

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

const renderPortion = () => {
  const fragment = document.createDocumentFragment();
  localComments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  commentsList.append(fragment);
};

export const renderComments = (comments) => {
  commentsList.innerHTML = '';
  localComments = [...comments];
  renderPortion();
};
