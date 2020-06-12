export default class Counter {
  constructor() {
    this._counterValue = 0;
    this.INCREMENT = 'increment';
    this.DECREMENT = 'decrement';
  }

  increment() {
    this._counterValue += 1;
  }

  decrement() {
    this._counterValue -= 1;
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(value) {
    this._counterValue = value;
  }
}
