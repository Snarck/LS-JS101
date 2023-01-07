const READLINE = require('readline-sync');

function displayBoard(board) {
  const BOARD_OUROBOROS = ("");
  const BOARD_VERT = ('     |     |');
  const BOARD_HOR = ('-----+-----+-----');
  let topRow = `  ${board[1].val}  |  ${board[2].val}  |   ${board[3].val}  `;
  let midRow = `  ${board[4].val}  |  ${board[5].val}  |   ${board[6].val}  `;
  let botRow = `  ${board[7].val}  |  ${board[8].val}  |   ${board[9].val}  `;

  // console.clear();
  let boardOutput = [
    BOARD_OUROBOROS,
    BOARD_VERT, topRow, BOARD_VERT,
    BOARD_HOR,
    BOARD_VERT, midRow, BOARD_VERT,
    BOARD_HOR,
    BOARD_VERT, botRow, BOARD_VERT,
    BOARD_OUROBOROS
  ];
  boardOutput.forEach(element => console.log(element));
}

function prompt(output) {
  console.log(`>>> ${output}`);
}

function initializeBoard() {

  const board = {
    1 : {val : "X" , avail : true},
    2 : {val : "O" , avail : true},
    3 : {val : "X" , avail : true},
    4 : {val : "O" , avail : true},
    5 : {val : "X" , avail : true},
    6 : {val : "O" , avail : true},
    7 : {val : "X" , avail : true},
    8 : {val : "O" , avail : true},
    9 : {val : "X" , avail : true},
  };
  for (let idx = 1; idx < 10; idx += 1 ) {
    board[idx].val = idx;
  }
  return board;
}

function playerChoosesSquare(board) {

  while (true) {
    prompt(`Please choose a square: ${getRemainingSquares(board).join(" ")}.`);
    let square = READLINE.question();
    if (board[square].avail) {
      updateBoard(square, "X", board);
      break;
    } else {
      prompt(`Invalid number : ${square}`);
    }
  }
}

function getRemainingSquares(board) {
  let remainingSquares = [];
  for (let idx = 1; idx < 10; idx += 1) {
    if (board[idx].avail === true) {
      remainingSquares.push(idx);
    }
  }
  return remainingSquares;
}

function updateBoard(square, playerSign, board) {
  if (boardFull(board)) return;
  board[square].val = playerSign;
  board[square].avail = false;
}

function boardFull(board) {
  if (getRemainingSquares(board).length === 0) {
    return true;
  }
  return false;
}

function computerChoosesSquare(board) {
  if (boardFull(board)) return;

  let remainingSquares = getRemainingSquares(board);
  let compSquare = Math.floor(Math.random() * remainingSquares.length);
  compSquare = remainingSquares[compSquare];
  updateBoard(compSquare, "O", board);
  prompt(`Computer chose ${compSquare}`);

}
let board = initializeBoard();
displayBoard(board);
while (true) {

  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);
  if (boardFull(board)) break;

}
console.log("Thanks for playing");