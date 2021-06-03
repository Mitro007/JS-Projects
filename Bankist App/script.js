'use strict';

const modalElement = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const headerElement = document.querySelector('.header');
const btnLearnMore = document.querySelector('.btn--scroll-to');
const featuresSection = document.getElementById('section--1');
const operationsSection = document.getElementById('section--2');
const testimonialsSection = document.getElementById('section--3');

// Modal Window
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

// Smooth Scrolling
btnLearnMore.addEventListener('click', function () {
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// Implementing Page Navigation with Smooth Scrolling
document.querySelector('.nav__links').addEventListener('click', function (ev) {
  // to prevent <a> from changing the url and reload
  ev.preventDefault();

  // Approach 1
  /*
  const url = ev.target.href;
  // console.log(url.substring(url.indexOf('#') + 1));
  switch (url.substring(url.indexOf('#') + 1)) {
    case 'section--1':
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'section--2':
      operationsSection.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'section--3':
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  }
  */

  // Approach 2 -- click on nav bar results in error
  if (ev.target.classList.contains('nav__link')) {
    const id = ev.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

  // Approach 3
  // console.log(ev.target.getAttribute('href'));
  /*switch (ev.target.getAttribute('href')) {
    case '#section--1':
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      break;
    case '#section--2':
      operationsSection.scrollIntoView({ behavior: 'smooth' });
      break;
    case '#section--3':
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  } */
});

// Creating tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');
const classNameForActiveContentEffect = 'operations__content--active';
const classNameForActiveTabEffect = 'operations__tab--active';
const classNameforDescription = 'operations__content--';

tabsContainer.addEventListener('click', function (ev) {
  const tabEl = ev.target.closest('.operations__tab');
  if (tabEl) {
    const tabId = tabEl.dataset.tab;
    const tabContent = document.querySelector(
      `.${classNameforDescription}${tabId}`
    );
    tabs.forEach((el) => {
      el.classList.remove(classNameForActiveTabEffect);
    });

    tabsContent.forEach((el) => {
      el.classList.remove(classNameForActiveContentEffect);
    });
    tabEl.classList.add(classNameForActiveTabEffect);
    tabContent.classList.add(classNameForActiveContentEffect);
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
/*
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
*/

////////////////////////////////////////////////////////////////////////////////////
// Nice way to remove event handler if we need the event listener only once

// const h1 = document.querySelector('h1');
// const alertH1 = function () {
//   alert('addEventListener: Great! you are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

/////////////////////////////////////////////////////////////
// Event Propagation In Practice
// rgb(255, 255, 255);
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (ev) {
  // console.log(ev.target, ev.currentTarget);
  // console.log(this);
  const color = randomColor();
  // console.log(color);
  ev.target.style.backgroundColor = color;

  // stop propagation - not recommended
  // ev.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (ev) {
  // console.log(ev.target, ev.currentTarget);
  console.log('Conatiner :: ', this === ev.currentTarget);
  const color = randomColor();
  // console.log(color);
  this.style.backgroundColor = color;
});

document.querySelector('.nav').addEventListener('click', function (ev) {
  // console.log(ev.target, ev.currentTarget);
  console.log('NAV :: ', this === ev.currentTarget);
  const color = randomColor();
  // console.log(color);
  this.style.backgroundColor = color;
});
*/

////////////////////////////////////////////////////////////
// DOM Traversing
// const h1 = document.querySelector('h1');

// going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.firstChild);
// console.log(h1.firstElementChild);
// console.log(h1.children);
// console.log(h1.childNodes);
// console.log(h1.innerHTML);
// console.log(h1.innerText);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// going upwards
// console.log(h1.parentElement);
// we can think of closest as opposite of querySelector.
// querySeletor searches down the node, whereas closest searches upward from the node
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going Sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
