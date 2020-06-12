'use strict';

const inputElem = document.querySelector('#validation-input');

const setClass = (toSet, toRemove) => {
  inputElem.classList.add(toSet);
  inputElem.classList.remove(toRemove);
};

const handle = e => {
  if (e.target.value.length !== Number(e.target.dataset.length)) {
    setClass('invalid', 'valid');
  } else {
    setClass('valid', 'invalid');
  }
};

inputElem.addEventListener('blur', handle);
