'use strict';

chrome.storage.sync.get({sitesEnabled:[]}, function(items) {
  var url = window.location.href;
  var sites = items.sitesEnabled;

  for (var i = 0; i < sites.length; i++) {
    if ( url.match(new RegExp(sites[i])) ) {
      shouldNotCopy();
      break;
    }
  }
});

function shouldNotCopy() {
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
}
