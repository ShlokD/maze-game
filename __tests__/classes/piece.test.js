import Piece from '../../js/classes/piece.js';


describe("Piece", () => {
  let piece;
  let actual;
  let expected;

  beforeEach(() => {
    piece = new Piece(4, 5)
  })

  test('it gets x and y', () => {
    actual = piece.getXY();
    expected = { x: 4, y: 5}
    expect(actual).toEqual(expected);
  });

  test('it moves x and y', () => {
    piece.move(2, 1)
    actual = piece.getXY();
    expected = { x: 6, y: 6}
    expect(actual).toEqual(expected);
  });

  test('it sets default', () => {
    piece = new Piece();
    actual = piece.getXY();
    expected = { x: 0,  y: 0}
    expect(actual).toEqual(expected);
  });

  test('it returns a string representation', () => {
    actual = piece.toString();
    expected = `(4,5)`
    expect(actual).toEqual(expected);
  });
})