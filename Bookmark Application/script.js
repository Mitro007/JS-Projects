'use strict';

const form = document.getElementById('myForm');
const bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];

form.addEventListener('submit', saveBookmark);

function saveBookmark(ev) {
  const siteName = document.getElementById('siteName').value;
  const siteURL = document.getElementById('siteUrl').value;

  const isBookmarkPresent =
    bookmark.length > 0 &&
    bookmark.some(
      (element) => element.siteName === siteName && element.siteURL === siteURL
    );

  if (!isBookmarkPresent) {
    bookmark.push({ siteName, siteURL });
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }

  ev.preventDefault();
}
