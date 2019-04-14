import Board from './board.js';

const coords = {
  37: {
    direction: 'left',
    ui: { x: -30, y: 0 }
  },
  38: {
    direction: 'up',
    ui: { x: 0, y: -30 }
  },
  39: {
    direction: 'right',
    ui: { x: 30, y: 0 }
  },
  40: {
    direction: 'down',
    ui: { x: 0, y: 30 }
  }
}

export default class {
  constructor() {
    this.pieceEl = document.querySelector("#piece");
    this.scoreEl = document.querySelector("#score");
    this.availableEl = document.querySelector("#available");
    this.board = new Board();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.start = this.start.bind(this);

    this.currentPosition = { posX: 0, posY: 0 };

  }

  setScoreText() {
    this.scoreEl.textContent = this.board.getScore();
  }

  setAvailableText() {
    this.availableEl.textContent = this.board.getAvailableScore();
  }

  setPiece(ui) {
    const { x: xTransform, y: yTransform } = ui;

    this.currentPosition.posX += xTransform;
    this.currentPosition.posY += yTransform;
    this.pieceEl.style.transform = `translate(${this.currentPosition.posX}px, ${this.currentPosition.posY}px)`;
  }

  handleKeyPress(ev) {
    ev.preventDefault();
    const {keyCode} = ev;
    if (!coords[keyCode]) return false;

    const { direction, ui } = coords[keyCode];

    const shouldMovePiece = this.board.movePiece(direction);
    if(shouldMovePiece) {
      this.setPiece(ui);
      this.setScoreText();
    }
  }

  start() {
    this.board.initLayout();
    this.setScoreText();
    this.setAvailableText();
    document.addEventListener('keydown', this.handleKeyPress);
  }
}