export default class {
  constructor(x = 0, y  = 0) {
    this.x = x
    this.y = y
  }

  getXY() {
    return { x: this.x, y: this.y }
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}
