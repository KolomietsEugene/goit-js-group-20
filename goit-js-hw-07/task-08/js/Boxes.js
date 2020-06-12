'use strict';

// eslint-disable-next-line import/extensions
import Box from './Box.js';

export default class Boxes {
  constructor(boxes = []) {
    this.boxes = boxes;
  }

  createBoxes(amount) {
    const newBoxes = [];
    for (let index = 1; index <= amount; index += 1) {
      const size = this.boxes.length * 10 + 30;
      const newBox = new Box({
        color: Box.generateRandomRGB(),
        width: size,
        height: size,
      });
      this.boxes.push(newBox);
      newBoxes.push(newBox);
    }
    console.log(newBoxes);
    return newBoxes;
  }

  destroyBoxes() {
    this.boxes = [];
  }
}
