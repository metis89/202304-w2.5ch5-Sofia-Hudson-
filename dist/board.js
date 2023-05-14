export const createBoard = (rows, columns) => {
    const generateBoard = [];
    for (let i = 0; i < rows; i++) {
        generateBoard[i] = [];
        for (let j = 0; j < columns; j++) {
            generateBoard[i][j] = Math.round(Math.random() * 2);
        }
    }
    return generateBoard;
};
export const displayBoard = (board) => {
    let gameBoard = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                gameBoard += "⬜";
            }
            if (board[i][j] === 0) {
                gameBoard += "⬛";
            }
        }
        gameBoard += "\n";
    }
    return gameBoard;
};
export const checkNeighbors = (board) => {
    const newBoard = [];
    for (let i = 0; i < board.length; i++) {
        const neighbors = [];
        for (let j = 0; j < board[i].length; j++) {
            let count = 0;
            if (board[i - 1] && board[i - 1][j - 1] === 1) {
                count++;
            }
            if (board[i - 1] && board[i - 1][j] === 1) {
                count++;
            }
            if (board[i - 1] && board[i - 1][j + 1] === 1) {
                count++;
            }
            if (board[i][j - 1] && board[i][j - 1] === 1) {
                count++;
            }
            if (board[i][j + 1] && board[i][j + 1] === 1) {
                count++;
            }
            if (board[i + 1] && board[i + 1][j - 1] === 1) {
                count++;
            }
            if (board[i + 1] && board[i + 1][j] === 1) {
                count++;
            }
            if (board[i + 1] && board[i + 1][j + 1] === 1) {
                count++;
            }
            neighbors.push(count);
        }
        newBoard.push(neighbors);
    }
    return newBoard;
};
export const getNewCells = (board) => {
    const newCellsBoard = checkNeighbors(board);
    for (let i = 0; i < newCellsBoard.length; i++) {
        for (let j = 0; j < newCellsBoard[i].length; j++) {
            if (newCellsBoard[i][j] === 2) {
                continue;
            }
            if (newCellsBoard[i][j] === 3) {
                board[i][j] = 1;
            }
            if (newCellsBoard[i][j] < 2) {
                board[i][j] = 0;
            }
            if (newCellsBoard[i][j] > 3) {
                board[i][j] = 0;
            }
        }
    }
    return board;
};
const board = [
    [0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
];
console.log(getNewCells(board));
