'use strict';

console.log(chrome)
console.log(chrome.storage)

var div = document.createElement('div');
  div.classList.add('_tio-message');
  div.innerHTML = '<p>Type it out</p>';

document.body.appendChild(div);

document.oncopy = function(e) {
  window.getSelection().empty();
  div.classList.add('_tio-animate');

  setTimeout(function() {
    div.classList.remove('_tio-animate');
  }, 1000);
}
