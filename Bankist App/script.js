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

//////////////////////////////////////////////////////////
//  Creating element
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// Styles - added as inline styles => we can set but if we want to read, we can access only those styles which are set
// programmatically
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// not working bcoz message element is not part of DOM.
// console.log(getComputedStyle(message).backgroundColor);

// message.innerHTML =
// 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// I believe it worked for him because he had the browser zoom level at 75%. The header element is set to a height of
// 100vh(viewport height), which means when your screen is too small / you are zoomed in too much / you have the inspect window
// open, the existing elements in the header have priority over increasing the height of the appended element (as 'append' adds
// the element within the 'box' of the header). When using 'after', the element is does not need to compete with the other
// header elements for some of those 100vh (though it's not really the desired effect UI-wise, as the cookie message will not
// be visible when landing on the page, only when you scroll down).
// headerElement.after(message);

// An element can exist only at one place within the DOM
// headerElement.append(message);
// headerElement.prepend(message);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// console.log(typeof getComputedStyle(message).height);

// message.style.height =
// Number.parseInt(getComputedStyle(message).height) + 20 + 'px';
// console.log(getComputedStyle(message).height);

// Event bubbling
// message.addEventListener('click', function () {
// console.log(this);
// this.remove();
// });

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src, logo.getAttribute('src'));
// console.log(logo.alt);
// console.log(logo.className);

// Non-standard attributes
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Harsh

// Data Attributes => must start with 'data-'
// console.log(logo.dataset.versionNumber);

////////////////////////////////////////////////////////////
// Smooth Scrolling
const btnLearnMore = document.querySelector('.btn--scroll-to');
const featuresSection = document.getElementById('section--1');

// Approach 1
// btnLearnMore.addEventListener('click', function (ev) {
// get the co-ordinates of section--1
// const s1Coords = featuresSection.getBoundingClientRect();

// console.log(s1Coords);
// console.log(ev.target.getBoundingClientRect());

// Current Scroll Position
// console.log(
//   'Current Scroll position (x, y) :: ',
//   window.pageXOffset,
//   window.pageYOffset
// );

// Height of viewport
// console.log(
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// Scrolling
// top is relative to viewport and not to document, so won't work in all scenarios(e.g. scroll and click)
// window.scrollTo(
//   s1Coords.left + window.pageXOffset,
//   s1Coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1Coords.left + window.pageXOffset,
//   top: s1Coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
// });

// Approach 2
btnLearnMore.addEventListener('click', function () {
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});
