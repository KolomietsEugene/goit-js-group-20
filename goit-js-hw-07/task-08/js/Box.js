'use strict';

export default class Box {
  constructor({ color = 'rgb(0,0,0)', width = 0, height = 0 }) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  static generateRandomRGB() {
    return `RGB(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)})`;
  }
}
