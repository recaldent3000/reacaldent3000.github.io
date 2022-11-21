// ==UserScript==
// @name         Open notion in app
// @namespace    https://gist.github.com/jeiea/514c8c0862710cc04aa9cbb5ac465c84
// @version      0.2
// @description  Useful with slack integration.
// @author       jeiea
// @match        https://www.notion.so/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=notion.so
// @grant        window.close
// ==/UserScript==

if (location.pathname.match(/\/[0-9a-z]{32}/i)) {
  location.href = location.href.replace('https://', 'notion://');
  setTimeout(() => {
    window.close();
  }, 2000);
}
