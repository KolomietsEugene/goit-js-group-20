'use strict';

// eslint-disable-next-line import/extensions
import Boxes from './Boxes.js';

const boxes = new Boxes();

const controls = document.querySelector('#controls');
const boxesElem = document.querySelector('#boxes');

const generateHtmlBoxes = amount => {
  return boxes
    .createBoxes(amount)
    .map(
      box =>
        `<div style="background-color: ${box.color};
        width: ${box.width}px;
        height: ${box.height}px">
        </div>`,
    )
    .join('');
};

const deleteAllBoxes = () => {
  boxes.destroyBoxes();
};

const handlerAddBoxes = () => {
  boxesElem.insertAdjacentHTML(
    'beforeend',
    generateHtmlBoxes(controls.children[0].value),
  );
};

const handlerDeleteAllBoxes = () => {
  deleteAllBoxes();
  boxesElem.innerHTML = '';
};

controls.children[1].addEventListener('click', handlerAddBoxes);
controls.children[2].addEventListener('click', handlerDeleteAllBoxes);
