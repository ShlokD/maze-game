export default class {
  constructor(score, available) {
    this.score = score;
    this.available = available;
  }

  setScore(score) {
    this.score = score;
  }

  setAvailable(available) {
    this.available = available;
  }

  getScore() {
    return this.score;
  }

  getAvailable() {
    return this.available;
  }

  incrementScore() {
    this.score++;
  }
} 