'use strict';

const items = document.querySelector('.list-group');
const btnSubmit = document.querySelector('.btn-dark');
const textField = document.querySelector('.mr-2');

btnSubmit.addEventListener('click', (ev) => {
  // If we want to disable the default behavior of the submit (which causes the page to refresh) we need to use the
  // preventDefault() method of the Event object.
  ev.preventDefault();

  // Create Text Element
  const textNode = document.createTextNode(textField.value);

  // Create Button Element
  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  btn.className = 'btn btn-danger btn-sm float-right delete';
  btn.addEventListener('click', removeItem);

  // Create li Element
  const liElement = document.createElement('li');
  liElement.className = 'list-group-item';
  liElement.appendChild(textNode);
  liElement.appendChild(btn);
  items.appendChild(liElement);
  textField.value = '';
});

for (let index = 0; index < items.children.length; index++) {
  items.children[index].children[0].addEventListener('click', removeItem);
}

function removeItem(ev) {
  let itemName = ev.target.parentNode.textContent;
  itemName = itemName.slice(0, -1);

  // A boolean indicating whether OK (true) or Cancel (false) was selected.
  const deleteConfirmation = confirm(
    `Do you really want to delete ${itemName} ?`
  );

  if (deleteConfirmation) {
    items.removeChild(ev.target.parentNode);
  }
}
