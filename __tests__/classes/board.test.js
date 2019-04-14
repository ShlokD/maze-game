import Board from '../../js/classes/board.js';

describe("Board", () => {
  let board;
  let actual;
  let expected;

  beforeAll(() => {
    board = new Board();
    board.initLayout();
  })

  test('it initializes start position', () => {
    actual = board.getLayout()[3][3];
    expected = 1;
    expect(actual).toEqual(expected);
  })

  test('it sets available score', () => {
    actual = board.getAvailableScore();
    expected = board.getLayout().reduce((score, row) => {
      score += row.reduce((acc, elem) => {
        acc += elem;
        return acc
      }, 0)
      return score;
    }, -1);

    expect(actual).toEqual(expected);
  });

  test('it sets score', () => {
    actual = board.getScore();
    expected = 0;
    expect(actual).toEqual(expected);
  });

  test('it sets piece position', () => {
    actual = board.getPiecePosition();
    expected = { x: 3, y: 3};
    expect(actual).toEqual(expected);
  });

  test('it returns if space exists', () => {
    actual = board.isSpace(3, 3);
    expected = true;
    expect(actual).toEqual(expected);
  });


  test('it returns movable as true for available space', () => {
    actual = board.isMovable(0, 0);
    expected = true;
    expect(actual).toEqual(expected);
  });

  test('it returns movable as false for non-available space', () => {
    actual = board.isMovable(-300, -300);
    expected = false;
    expect(actual).toEqual(expected);
  });

})