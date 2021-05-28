'use strict';

const modalElement = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const headerElement = document.querySelector('.header');

const closeModal = function () {
  modalElement.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function (ev) {
  ev.preventDefault();
  modalElement.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach((element) => {
  element.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !modalElement.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// An element can exist only at one place within the DOM
headerElement.append(message);
headerElement.prepend(message);

// Event bubbling
message.addEventListener('click', function () {
  // console.log(this);
  this.remove();
});
