'use strict';

const form = document.getElementById('myForm');
form.addEventListener('submit', saveBookmark);

function saveBookmark(ev) {
  ev.preventDEfault();
  const siteName = document.getElementById('siteName');
  console.log(siteName);
  const siteURL = document.getElementById('siteUrl');
  console.log(siteURL);
  // console.log(siteName, siteURL);
  // localStorage.setItem(siteName, siteURL);
}
