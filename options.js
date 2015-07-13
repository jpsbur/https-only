/* HTTPS Only chromuim extension
 * options.js: Options page logic
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * Copyright 2015 Yury Petrov <jpsbur@gmail.com>
 */

function saveOptions() {
  localStorage.setItem('optionsRedirect', document.getElementById('optionsRedirect').value);
  localStorage.setItem('optionsHttpAllowed', document.getElementById('optionsHttpAllowed').value);
  var status = document.getElementById('statusLine');
  status.textContent = 'Options saved';
  setTimeout(function() {
    status.textContent = '';
  }, 1000);
}

function restoreOptions() {
  document.getElementById('optionsRedirect').value = localStorage.getItem('optionsRedirect') || '';
  document.getElementById('optionsHttpAllowed').value = localStorage.getItem('optionsHttpAllowed') || '';
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);
