'use strict';

const inputElem = document.querySelector('#validation-input');

const replace = (oldClass, newCLass) => {
  inputElem.classList.add(oldClass);
  inputElem.classList.toggle(newCLass);
};

const handle = e => {
  if (e.target.value < e.target.dataset.length) {
    replace('invalid', 'valid');
  } else {
    replace('valid', 'invalid');
  }
};

inputElem.addEventListener('blur', handle);
