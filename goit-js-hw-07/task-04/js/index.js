// eslint-disable-next-line import/extensions
import Counter from './Counter.js';

const counter = new Counter();

const counterFormElem = document.querySelector('#counter');
const counterElem = document.querySelector('#value');

function render(tempCounter = new Counter()) {
  counterElem.textContent = tempCounter.counterValue;
}

const handleClick = e => {
  if (e.target.dataset.action === counter.INCREMENT) {
    counter.increment();
  } else if (e.target.dataset.action === counter.DECREMENT) {
    counter.decrement();
  }
  render(counter);
};

counterFormElem.addEventListener('click', handleClick);
