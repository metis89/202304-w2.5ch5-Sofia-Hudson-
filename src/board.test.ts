import {
  createBoard,
  displayBoard,
  checkNeighbors,
  getNewCells,
} from "./board";

describe("Given a createBoard function", () => {
  describe("When it receives 5 and 5 as parameters", () => {
    test("Then it should return an array of 5 columns and 5 rows", () => {
      const rows = 5;
      const columns = 5;

      const result = createBoard(rows, columns);

      expect(result.length).toBe(5);
      expect(result[0].length).toBe(5);
    });
  });
});

describe("Given a displayBoard function", () => {
  describe("When it receives a nested array of [[0, 0, 0], [1, 0, 1], [0, 0, 0]]", () => {
    test("Then it should return ⬛⬛⬛\n⬜⬛⬜\n⬛⬛⬛", () => {
      const gameBoard: number[][] = [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
      ];
      const result = displayBoard(gameBoard);

      const expectResult = `⬛⬛⬛\n⬜⬛⬜\n⬛⬛⬛`;

      expect(result).toStrictEqual(expectResult);
    });
  });
});

describe("Given a checkNeighbors function", () => {
  describe("When it receives an array of arrays [[0, 0, 1], [1, 1, 0], [0, 1, 0]]", () => {
    test("Then it should return [[ 2, 3, 1 ], [ 2, 3, 3 ], [ 3, 2, 2 ]]", () => {
      const board: number[][] = [
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const expected = [
        [2, 3, 1],
        [2, 3, 3],
        [3, 2, 2],
      ];

      const correctResult = checkNeighbors(board);

      expect(correctResult).toStrictEqual(expected);
    });
  });
});

describe("Given a getNewCells function", () => {
  describe("When it receives an array of arrays [[0, 0, 1, 0, 1], [1, 1, 0, 1, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]]", () => {
    test("Then it should return [[ 0, 1, 1, 0, 1 ], [ 1, 1, 0, 0, 1 ], [ 1, 1, 0, 1, 1 ], [0, 0, 0, 0, 0]]", () => {
      const board: number[][] = [
        [0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ];

      const correctResult = getNewCells(board);

      expect(correctResult).toStrictEqual(expected);
    });
  });
});
