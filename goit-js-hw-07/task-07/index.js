'use strict';

const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');

inputElem.addEventListener('input', e => {
  spanElem.setAttribute('style', `font-size: ${e.target.value}px;`);
});
