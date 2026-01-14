import {
  getRandomInteger,
  getRandomElements,
  createIdGenerator
} from '../utils.js';


const generateCommentsId = createIdGenerator();

export const createComments = (avatar, message, name) => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(avatar)}.svg`,
  message: getRandomElements(message),
  name: getRandomElements(name),
});
