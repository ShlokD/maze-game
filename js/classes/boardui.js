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
    this.buttons = document.querySelectorAll('.controls button');
    this.board = new Board();
    this.currentPosition = { posX: 0, posY: 0 };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

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

  setUI(action) {
    if(!coords[action]) return false;
    const { direction, ui } = coords[action];

    const shouldMovePiece = this.board.movePiece(direction);
    if(shouldMovePiece) {
      this.setPiece(ui);
      this.setScoreText();
    }
  }

  handleKeyPress(ev) {
    ev.preventDefault();
    const {keyCode} = ev;
    this.setUI(keyCode);
  }

  handleButtonClick(ev) {
    const { direction } = ev.target.dataset;
    this.setUI(direction);
  }

  start() {
    this.board.initLayout();
    this.setScoreText();
    this.setAvailableText();
    document.addEventListener('keydown', this.handleKeyPress);
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.handleButtonClick);
    })
  }
}