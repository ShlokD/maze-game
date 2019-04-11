class Piece {
  constructor(elem) {
    this.x = 0;
    this.y = 0;
    this.elem = elem;

    this.coords = {
      37: [-48, 0], //left
      38: [0, -48], //up
      39: [48, 0], // right
      40: [0, 48] // down
    }
  }

  move(direction) {
    if(!this.coords[direction]) return;

    const [x, y] = this.coords[direction];
    this.x += x;
    this.y += y;
    this.elem.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
}

class Board {
  constructor() {
    this.piece = new Piece(document.querySelector("#piece"));
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.start = this.start.bind(this);
  }

  handleKeyPress(ev) {
    ev.preventDefault();
    this.piece.move(ev.keyCode);
  }

  start() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
}


window.addEventListener('load', () => {
  const board = new Board();
  board.start();
})

