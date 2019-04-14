import Score from './score.js';
import Piece from './piece.js';


export default class {
  constructor() {
    this.piece = null;
    this.score = null;

    this.layout = [[], [], [], [], [], [], []];
    this.seen = {};

    this.positionMap = {
      'left': { x: -1, y: 0 },
      'up': { x: 0, y: -1 },
      'right': { x: 1, y: 0 },
      'down': { x: 0, y: 1 }
    }
  }

  setSeen() {
    const coord = this.piece.toString();
    this.seen[coord] = true;
  }

  setScore() {
    const coord = this.piece.toString();
    if (!this.seen[coord]) {
      this.score.incrementScore();
    }
  }

  getScore() {
    return this.score.getScore()
  }

  getAvailableScore() {
    return this.score.getAvailable();
  }

  getPiecePosition() {
    return this.piece.getXY();
  }

  getLayout() {
    return this.layout;
  }


  initLayout() {
    let available = 0;

    for(let i = 0; i < this.layout.length; ++i) {
      const row = this.layout[i];
      for (let j = 0; j < this.layout.length; ++j) {
        const val = Math.round(Math.random());
        row.push(val)
        if (val === 1) available++;
      }
    }


    if(this.layout[3][3] === 1) {
      available--;
    } else {
      this.layout[3][3] = 1;
    }

    this.piece = new Piece(3, 3);
    this.score = new Score(0, available);
    this.setSeen();
  }

  isSpace(x, y) {
    let space = false
    try {
      space = !!this.layout[y][x]
    } catch(e) {}
    return space;
  }

  isMovable(x, y) {
    const { x: pieceX, y: pieceY } = this.piece.getXY();
    const boundX = pieceX + x;
    const boundY = pieceY + y;

    return boundX >= 0 && boundX < this.layout.length && boundY >= 0 && boundY < this.layout[0].length && this.isSpace(boundX, boundY);
  }

  movePiece(direction) {
    const coord = this.positionMap[direction];
    if (coord) {
      const { x, y } = coord;
      if(this.isMovable(x, y)) {
        this.piece.move(x, y);
        this.setScore();
        this.setSeen();
        return true;
      }
      return false;
    }
    return false;
  }
}