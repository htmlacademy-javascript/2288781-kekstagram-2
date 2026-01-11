/**
 * МОДУЛЬ, КОТОРЫЙ БУДЕТ ОТВЕЧАТЬ ЗА СОЗДАНИЕ ОБЪЕКТА С ОПИСАНИЕМ ФОТОГРАФИИ
 */

import { getDataArrays } from '../data.js';

import {
  getRandomInteger,
  getRandomElements } from '../utils.js';

import {
  generatePhotoId,
  generatePhotoUrl } from '../create-photos/get-id.js';

import { createComments } from '../create-photos/comments-photo.js';


const {
  DESCRIPTIONS,
  LIKES,
  COMMENTS,
  MAX_PHOTOS } = getDataArrays();

const getPhotoUsers = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: Array.from({ length: getRandomInteger(COMMENTS.MIN, COMMENTS.MAX) }, createComments),
});

export const getAllPhotoUsers = () => Array.from({ length: MAX_PHOTOS }, getPhotoUsers);
