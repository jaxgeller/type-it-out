document.addEventListener('DOMContentLoaded', retrieveData);

var add = document.getElementById('add');
var submit = document.getElementById('submit');
var content = document.getElementById('content');

// Creates a new input
function newInput(value) {
  var input = document.createElement('input');
      input.classList.add('site-input');
      input.value = value;
      isValid(input);
      input.addEventListener('keyup', function() {return isValid(this);});
  return input;
}

// Checks if input is valid
function isValid(input) {
  if (input.value.trim())
    input.style.borderColor = 'green';
  else
    input.style.borderColor = 'red';
}

// Returns de-nodified inputs
function getInputs() {
  return Array.prototype.slice.call(document.querySelectorAll('.site-input'));
}

// Retrieves data and inits inputs
function retrieveData() {
  chrome.storage.sync.get({sitesEnabled:[]}, function(items) {
    items.sitesEnabled.forEach(function(item) {
      content.appendChild(newInput(item));
    });
  });
}

// Add handler. Won't add a new one if the last is blank
add.addEventListener('click', function() {
  var inputs = getInputs();
  if (inputs[inputs.length-1].value.trim())
    content.appendChild(newInput(''));
});

// Submit handler
submit.addEventListener('click', function() {
  var inputs = getInputs().filter(function(input) {
    return input.value.trim();
  }).map(function(input) {
    return input.value;
  });

  chrome.storage.sync.set({
    sitesEnabled: inputs
  }, function() {
    submit.textContent = 'Saved!';
    setTimeout(function(){submit.textContent = 'Submit'}, 1000);
  });
});
