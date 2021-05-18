'use stict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', () => {
    modal.classList.remove('hidden'); // console.log(modal.classList) => [modal hidden]
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Esc key event
// KeyboradEvents are global events i.e. not specific to one element, and applicable to entire document object, hence reistered
// on document object
// Fires when the user presses a key.
document.onkeydown = (ev) => {
  // document.onkeydown <==> document.addEventListener('keydown')
  if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};
