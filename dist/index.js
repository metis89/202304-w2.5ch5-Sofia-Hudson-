import { createBoard, displayBoard, getNewCells } from "./board.js";
const playGame = () => {
    const board = createBoard(15, 30);
    setInterval(() => {
        console.clear();
        getNewCells(board);
        console.log(displayBoard(board));
    }, 200);
};
playGame();
