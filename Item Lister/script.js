'use strict';

const itemList = document.getElementById('items');
const form = document.getElementById('addForm');
const textField = document.querySelector('.mr-2');
const btnSearch = document.getElementById('filter');

// Add Item
form.addEventListener('submit', addItem);

// Remove Item - Event Bubbling
itemList.addEventListener('click', removeItem);

// Filter Item
btnSearch.addEventListener('keyup', filterItems);

function addItem(ev) {
  ev.preventDefault();

  // Create Text Element
  const textNode = document.createTextNode(textField.value);

  // Create Button Element
  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  btn.className = 'btn btn-danger btn-sm float-right delete';

  // Create li Element
  const liElement = document.createElement('li');
  liElement.className = 'list-group-item';
  liElement.appendChild(textNode);
  liElement.appendChild(btn);
  itemList.appendChild(liElement);
  textField.value = '';
}

function removeItem(ev) {
  if (ev.target.classList.contains('delete')) {
    // console.log(ev.target.parentNode);
    // console.log(ev.target.parentElement);
    let itemName = ev.target.parentNode.firstChild.textContent;

    // A boolean indicating whether OK (true) or Cancel (false) was selected.
    const deleteConfirmation = confirm(
      `Do you really want to delete ${itemName} ?`
    );

    if (deleteConfirmation) {
      itemList.removeChild(ev.target.parentNode);
    }
  }
}

function filterItems(ev) {
  const searchedItem = ev.target.value.toLowerCase();
  // const items = itemList.querySelectorAll('li');
  // console.log(items);
  // const itemsArray = Array.from(items);
  // console.log(itemsArray);
  const items = Array.from(document.querySelectorAll('li'));
  items.forEach((item) => {
    // console.log(item);
    // console.log(item.firstChild);
    // console.log(item.firstChild.textContent);
    if (item.firstChild.textContent.toLowerCase().indexOf(searchedItem) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
