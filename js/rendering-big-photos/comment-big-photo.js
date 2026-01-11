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


/*
  Задача второй части
  Каждый объект с описанием фотографии содержит массив с комментариями.
  Данные из этого массива мы вывели в соответствующую область окна полноразмерного просмотра.
  Все бы хорошо, но для популярных фотографий комментариев может быть много.
  Если вывести их разом, то пользователю будет неудобно взаимодействовать с окном просмотра.
  Улучшить пользовательский интерфейс поможет кнопка «Загрузить ещё»:
  - Покажите блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, убрав у них класс hidden.
  - В модуле, который отвечает за отрисовку окна с полноразмерным изображением, доработайте код по выводу списка комментариев таким образом,
    чтобы список показывался не полностью, а по 5 элементов, и следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё».
    Не забудьте реализовать обновление числа показанных комментариев в блоке .social__comment-count.
    (Обратите внимание, хотя кнопка называется «Загрузить ещё», никакой загрузки с сервера не происходит.
    Просто показываются следующие 5 комментариев из списка.)
*/
