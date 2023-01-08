const READLINE = require('readline-sync');

//Board Manipulation and intializiation
function displayBoard(board) {
  const BOARD_OUROBOROS = ("");
  const BOARD_VERT = ('     |     |');
  const BOARD_HOR = ('-----+-----+-----');
  let topRow = `  ${board[1]}  |  ${board[2]}  |   ${board[3]}  `;
  let midRow = `  ${board[4]}  |  ${board[5]}  |   ${board[6]}  `;
  let botRow = `  ${board[7]}  |  ${board[8]}  |   ${board[9]}  `;

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

function initializeBoard() {

  let board = {
    1 : "1",
    2 : "2",
    3 : "3",
    4 : "4",
    5 : "5",
    6 : "6",
    7 : "7",
    8 : "8",
    9 : "9",
    userMark : "X",
    cpuMark : "O",
    legalSquares : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  };
  return board;
}

function initalizeScore() {
  let score = {
    userScore : 0,
    cpuScore : 0,
    winsNeeded : 2,
    tie : 0,
  };
  return score;
}

function displayScore(score) {
  prompt(`Player Wins: ${score.userScore} Computer Wins: ${score.cpuScore}`);
  prompt(`Number of matches resulting in ties: ${score.tie}`);
  prompt(`Playing until someone wins ${score.winsNeeded} games.`);
}

function updateLegalSquares(board, square) {
  let removedSquare = board.legalSquares.indexOf(square);
  board.legalSquares.splice(removedSquare, 1);
}

function gameHeader(board, score) {
  prompt(`You are ${board.userMark}. Computer is ${board.cpuMark}`);
  displayScore(score);
  displayBoard(board);
} //Done handling Board Manipulation and Initalization


//Handling input/output/choices
function prompt(output) {
  console.log(`>>> ${output}`);
}

function joinOr(array, delimiter, joinWord) {
  switch (array.length) {
    case 0 :
      return "";
    case 1 :
      return array[0];
    case 2 :
      return array.join(` ${joinWord} `);
    default :
      return array.slice(0, array.length - 1).join(delimiter) +
             `${delimiter + joinWord} ${array[array.length - 1]}`;

  }
}

function userChoosesSquare(board) {
  while (true) {
    prompt(`Please choose a square: ${joinOr(board.legalSquares, ", ", "or")}.`);
    let square = READLINE.question();

    if (board.legalSquares.includes(square)) {
      updateLegalSquares(board, square);
      board[square] = board.userMark;
      break;
    } else {
      prompt(`Invalid number : ${square}`);
    }
  }
}

function alternatePlayer(currentPlayer = "Player") {
  return currentPlayer === "Player" ? "Computer" : "Player";
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "Player") {
    userChoosesSquare(board);
  } else {
    cpuChoosesSquare(board);
  }
}

function playingAgain() {
  const REGEX = new RegExp("^[YN]$", "i");
  prompt("Would you like to play again? Y/N");

  while (true) {
    let userInput = READLINE.question();
    if (REGEX.test(userInput)) {
      return userInput === "Y" || userInput === "y";
    } else {
      prompt("Sorry, only accepting Y/N");
    }

  }
} //Done handling input/output/choices.

//Handling computer turn:
function cpuChoosesSquare(board) {
  let cpuSquare =
  board.legalSquares[Math.floor(Math.random() * board.legalSquares.length)];

  updateLegalSquares(board, cpuSquare);
  board[cpuSquare] = board.cpuMark;

}


//Resolving the game/score keeping.
function boardFull(board) {
  return board.legalSquares.length < 1;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];
    if ( board[sq1] === board.userMark &&
         board[sq2] === board.userMark &&
         board[sq3] === board.userMark)  {
      return "Player";
    } else if ( board[sq1] === board.cpuMark &&
                board[sq2] === board.cpuMark &&
                board[sq3] === board.cpuMark) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function scoreKeeper(score, winner) {
  if (winner === "Player") {
    score.userScore += 1;
  } else if (winner === "Computer") {
    score.cpuScore += 1;
  } else {
    score.tie += 1;
  }

}

function matchOver(score) {
  if (score.userScore === score.winsNeeded) {
    prompt("Player wins the match!");
    return true;
  } else if (score.cpuScore === score.winsNeeded) {
    prompt("Computer wins the match!");
    return true;
  } else {
    return false;
  }

} // Done Resolving the game/score keeping.

//menu loop
while (true) {
  let score = initalizeScore();

  //main game loop
  while (true) {
    let board = initializeBoard();
    let currentPlayer = "Player"; //Would like to make this an optional.

    while (true) {
      gameHeader(board, score);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (boardFull(board) || someoneWon(board)) break;

    }

    if (someoneWon(board)) {
      scoreKeeper(score, detectWinner(board));
      if (matchOver(score)) {
        break;
      }
    } else {
      scoreKeeper(score, "Tie");
    }
  }
  if (!playingAgain()) break;
}

prompt("Thanks for playing!");