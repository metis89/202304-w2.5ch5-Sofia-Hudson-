import { createBoard, printBoard } from "./board";

describe("Given a randomBoard function", () => {
  describe("When it receives 5 and 5 as parameters", () => {
    test("Then it should return an array of 5 columns and 5 rows", () => {
      const result = createBoard(5, 5);

      expect(result).toBe(5);
      expect(result).toBe(5);
    });
  });
});

describe("Given a printBoard function", () => {
  describe("When it receives a nested array of 0s and 1s", () => {
    test("Then it should return it as a string, where the 0s are turned into ⬛, the 1s are turned into ⬜ and at the end of every array in the main array it injects a breakline", () => {
      const gameBoard: number[][] = [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0],
      ];
      const result = generateBoard;
      const expectResult = `⬛⬛⬛\n⬜⬛⬜\n⬛⬛⬛\n`;
      expect(result).toBe(expectResult);
    });
  });
});
