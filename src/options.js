document.addEventListener('DOMContentLoaded', function() {

chrome.storage.sync.get({
  sitesEnabled: []
}, function(items) {
  items.sitesEnabled.forEach(function(item) {
    var input = document.createElement('input');
        input.classList.add('site-input');
        input.value = item;
    document.getElementById('content').appendChild(input);
  });
  addUi();
});

function addUi() {
  var input = document.createElement('input');
  var add = document.createElement('button');
  var submit = document.createElement('button');

  input.classList.add('site-input');

  add.id += 'add';
  add.textContent = 'add'

  submit.id += 'submit';
  submit.textContent = 'submit'

  document.getElementById('content').appendChild(input);
  document.getElementById('ui').appendChild(add);
  document.getElementById('ui').appendChild(submit);

  add.onclick = function() {
    var input = document.createElement('input');
    input.classList.add('site-input');
    document.getElementById('content').appendChild(input);
  }

  submit.onclick = function() {
    var holder = [];
    Array.prototype.slice.call(document.querySelectorAll('.site-input')).forEach(function(item) {
      if (item.value !== '')
        holder.push(item.value);
    });

    chrome.storage.sync.set({
      sitesEnabled: holder
    }, function() {

    });

  }
}



});
