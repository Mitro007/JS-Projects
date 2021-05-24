'use strict';

const form = document.getElementById('myForm');
const savedBookmarks = document.getElementById('bookmarksResults');
const bookmarks = JSON.parse(localStorage.getItem('bookmark')) || [];

window.addEventListener('load', fetchBookmarks);
form.addEventListener('submit', saveBookmark);

function saveBookmark() {
  const siteName = document.getElementById('siteName').value;
  const siteURL = document.getElementById('siteUrl').value;

  const isBookmarkPresent =
    bookmarks.length > 0 &&
    bookmarks.some(
      (element) =>
        element.siteName.toLowerCase() === siteName.toLowerCase() &&
        element.siteURL === siteURL
    );

  if (!isBookmarkPresent) {
    bookmarks.push({ siteName, siteURL });
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  }
}

function fetchBookmarks() {
  bookmarks.forEach((element) => {
    savedBookmarks.appendChild(createDivElement(element));
  });
}

/*
  <div class="card card-body bg-light">
    <h3>harsh
    <button class="btn btn-outline-danger btn-sm float-right delete">Delete</button>
    <button class="btn btn-outline-primary btn-sm float-right view">View</button>
    </h3>
  </div>
*/
function createDivElement(element) {
  const h3Element = document.createElement('h3');

  // delete button
  const btnDelete = document.createElement('button');
  btnDelete.innerHTML = 'Delete';
  btnDelete.className = 'btn btn-outline-danger btn-sm float-right delete';

  // view button
  const btnView = document.createElement('button');
  btnView.innerHTML = 'View';
  btnView.className = 'btn btn-outline-primary btn-sm float-right view';

  h3Element.appendChild(document.createTextNode(element.siteName));
  h3Element.appendChild(btnDelete);
  h3Element.appendChild(btnView);

  const divEl = document.createElement('div');
  divEl.className = 'card card-body bg-light';
  divEl.appendChild(h3Element);

  return divEl;
}

savedBookmarks.addEventListener('click', (ev) => {
  const parentElement = ev.target.parentElement.parentElement;
  const siteName = parentElement.firstElementChild.childNodes[0].nodeValue;
  const index = bookmarks.map((element) => element.siteName).indexOf(siteName);

  if (ev.target.classList.contains('delete')) {
    savedBookmarks.removeChild(parentElement);
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  } else {
    window.open(bookmarks[index].siteURL, '_blank');
  }
});
