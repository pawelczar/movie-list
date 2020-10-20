const modal = document.querySelector('#add-modal');
const addMovieBtn = document.querySelector('header button');
const passBtn = document.querySelector('.btn--passive');
const addBtn = passBtn.nextElementSibling;
const backdrop = document.querySelector('#backdrop');
const userInputs = document.querySelectorAll('input');

const movies = [];

const toggleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (usrIn of userInputs) {
    usrIn.value = '';
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const backdropClick = () => {
  toggleModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === '' || imageUrlValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
    alert('Please enter correct values');
    return;
  }
  const movie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(movie);
  console.log(movies);
  toggleModal();
  clearMovieInputs();
};
addMovieBtn.addEventListener('click', toggleModal);
passBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', backdropClick);
addBtn.addEventListener('click', addMovieHandler);
