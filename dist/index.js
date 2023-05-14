import { createBoard, printBoard } from "./board";
let generation = 0;
setInterval(() => {
    const board = createBoard(10, 20);
    console.log(printBoard(board));
    generation++;
    console.log(`generation: ${generation}`);
}, 300);
