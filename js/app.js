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

class Scores {
  constructor(scoreEl, availableEl) {
    this.scoreEl = scoreEl;
    this.availableEl = availableEl;
  }

  setScore(score) {
    this.scoreEl.textContent = `${score}`;
  }

  setAvailable(available) {
    this.availableEl.textContent = `${available}`
  }
}

class Board {
  constructor() {
    this.piece = new Piece(document.querySelector("#piece"));
    this.scores = new Scores(
      document.querySelector("#score"),
      document.querySelector("#available")
    );

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.start = this.start.bind(this);

    this.layout = new Array(7).fill([...new Array(7)])
    this.positionMap = {
      37: [-1, 0], //left
      38: [0, 1], //up
      39: [1, 0], // right
      40: [0, -1] // down
    }
    this.positionX = 3;
    this.positionY = 3;
    this.score = 0;
    this.available = 0;
    this.seen = {};
  }

 

  generate() {
    this.layout.forEach(row => {
     for(let i = 0; i < row.length; ++i) {
       row[i] = Math.round(Math.random())
       if(row[i] === 1) this.available++;
     }
    })

    this.layout[3][3] = 1;
    this.seen[`33`] = true;

    this.scores.setScore(this.score);
    this.scores.setAvailable(this.available);
  }

  setPosition(direction) {
    if(!this.positionMap[direction]) return false;

    const [x, y] = this.positionMap[direction];
    if(this.positionX + x < 0 || this.positionX + x > 6) return false;
    if(this.positionY + y < 0 || this.positionY + y > 6) return false;

    const newX = this.positionX + x;
    const newY = this.positionY + y;
    const posAvailable = !!this.layout[newX][newY];

    if(posAvailable) {
      this.positionX = newX;
      this.positionY = newY
    }
    return posAvailable;
  }

  calculateScore() {
    if(!this.seen[`${this.positionX}${this.positionY}`]) {
      this.seen[`${this.positionX}${this.positionY}`] = true;
      this.score++;
      this.scores.setScore(this.score);
    }
  }

  handleKeyPress(ev) {
    ev.preventDefault();
    const { keyCode } = ev;

    const isPositionSet = this.setPosition(keyCode);
    console.log({ x: this.positionX, y: this.positionY, score: this.score, available: this.available})
    if(isPositionSet) {
      this.calculateScore();
      this.piece.move(keyCode);
    }
  }

  start() {
    this.generate();
    document.addEventListener('keydown', this.handleKeyPress);
  }
}


window.addEventListener('load', () => {
  const board = new Board();
  board.start();
})

