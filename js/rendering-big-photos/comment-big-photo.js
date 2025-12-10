import { commentsList } from './constanta-big-photos.js';

const template = document.querySelector('.social__comment');

let localComments;

const renderComment = ({ avatar, message, name }) => {

};

const renderPortion = () => {
  localComments.forEach((item) => {

  })
};

export const renderComments = (comments) => {
  commentsList.innerHTML = '';
  // eslint-disable-next-line no-console
  console.log(comments);
  localComments = [...comments];

};
