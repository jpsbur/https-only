/* HTTPS Only chromuim extension
 * main.js: Main extension logic
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

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    url = details.url;
    parser = document.createElement('a');
    parser.href = url;
    if (parser.protocol == 'http:') {
      if (parser.hostname == 'vk.com') {
        return {redirectUrl: 'https:' + url.substr(5)};
      } else {
        return {cancel: true};
      }
    }
    return {};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
