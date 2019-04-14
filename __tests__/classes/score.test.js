import Score from '../../js/classes/score.js';

describe("Score", () => {
  let score;
  let actual;
  let expected;

  beforeEach(() => {
    score = new Score(10, 20)
  });

  test('it gets score', () => {
    actual = score.getScore();
    expected = 10;

    expect(actual).toEqual(expected);
  });

  test('it gets available ', () => {
    actual = score.getAvailable();
    expected = 20;

    expect(actual).toEqual(expected);
  });

  test('it sets score', () => {
    score.setScore(15);
    actual = score.getScore();
    expected = 15;

    expect(actual).toEqual(expected);
  });

  test('it sets score', () => {
    score.setAvailable(25);
    actual = score.getAvailable();
    expected = 25;

    expect(actual).toEqual(expected);
  });

  test('it increments score', () => {
    score.incrementScore();
    actual = score.getScore();
    expected = 11;

    expect(actual).toEqual(expected);
  });
})