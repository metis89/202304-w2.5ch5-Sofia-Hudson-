export const createBoard = (rows, columns) => {
    const generateBoard = [];
    for (let i = 0; i < rows; i += 1) {
        generateBoard[i] = [];
        for (let j = 0; j < columns; j += 1) {
            generateBoard[i][j] = Math.round(Math.random());
        }
    }
    return console.log(generateBoard);
};
export const printBoard = (board) => {
    console.clear();
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
