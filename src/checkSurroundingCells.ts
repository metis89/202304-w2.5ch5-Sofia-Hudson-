import { createBoard } from "./createBoard.js";

const getSurroundingCells = (board: number[][]) => {
  let surroundingCells: number[][] = [];

  for (let row = 0; row < board.length; row++) {
    let rowCells: number[] = [];

    for (let column = 0; column < board[row].length; column++) {
      let surroundingCellsCount = 0;

      if (board[row - 1] && board[row - 1][column - 1] === 1) {
        surroundingCellsCount++;
      }

      if (board[row - 1] && board[row - 1][column] === 1) {
        surroundingCellsCount++;
      }

      if (board[row - 1] && board[row - 1][column + 1] === 1) {
        surroundingCellsCount++;
      }

      if (board[row][column - 1] && board[row][column - 1] === 1) {
        surroundingCellsCount++;
      }

      if (board[row][column + 1] && board[row][column - 1] === 1) {
        surroundingCellsCount++;
      }

      if (board[row + 1] && board[row + 1][column - 1] === 1) {
        surroundingCellsCount++;
      }

      if (board[row + 1] && board[row + 1][column] === 1) {
        surroundingCellsCount++;
      }

      rowCells.push(surroundingCellsCount);
    }
    surroundingCells.push(rowCells);
  }

  return surroundingCells;
};

export const getNextGenerationBoard = (board: number[][]) => {
  const surroundingCells = getSurroundingCells(board);

  for (let index = 0; index < surroundingCells.length; index++) {
    for (let j = 0; j < surroundingCells[index].length; j++) {
      if (surroundingCells[index][j] < 2) board[index][j] = 0;
      if (surroundingCells[index][j] > 3) board[index][j] = 0;
      if (surroundingCells[index][j] === 3) board[index][j] = 1;
    }
  }
  return board;
};
