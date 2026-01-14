import { getDataArrays } from '../data.js';
import {
  getRandomInteger,
  getRandomElements
} from '../utils.js';
import { generateCommentsId } from '../create-photos/get-id.js';


const {
  AVATARS,
  MESSAGES,
  NAMES
} = getDataArrays();

export const createComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
  message: getRandomElements(MESSAGES),
  name: getRandomElements(NAMES),
});
