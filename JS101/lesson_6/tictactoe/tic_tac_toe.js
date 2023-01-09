const READLINE = require('readline-sync');
const SETTINGS = require('./tictac_settings.json');
const PLAYER_MARK = SETTINGS["marks"]["default"][0];
const CPU_MARK = SETTINGS["marks"]["default"][1];

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
  return {
    1 : "1",  2 : "2", 3 : "3",
    4 : "4",  5 : "5", 6 : "6",
    7 : "7",  8 : "8", 9 : "9",

    playerMark : PLAYER_MARK,
    cpuMark : CPU_MARK,

    // legalSquares :[
    //   "1", "2", "3",
    //   "4", "5", "6",
    //   "7", "8", "9"
    // ],

    winningLines : [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ]
  };
}

function initalizeScore() {
  return {
    userScore : 0,
    cpuScore : 0,
    winsNeeded : 2,
    tie : 0,
  };
}

function displayScore(score) {
  prompt(`Player Wins: ${score.userScore} Computer Wins: ${score.cpuScore}`);
  prompt(`Number of matches resulting in ties: ${score.tie}`);
  prompt(`Playing until someone wins ${score.winsNeeded} games.`);
}

function legalSquares (board) {
  let legalSquares = [];
  for (let idx = 1; idx < 10; idx += 1) {
    let index = String(idx);
    if (board[index] === index) {
      legalSquares.push(index);
    }
  }
  return legalSquares;
}
// function updateLegalSquares(board, square) {
//   let removedSquare = board.legalSquares.indexOf(square);
//   board.legalSquares.splice(removedSquare, 1);
// }

function gameHeader(board, score) {
  prompt(`You are ${board.playerMark}. Computer is ${board.cpuMark}`);
  displayScore(score);
  displayBoard(board);
} //Done handling Board Manipulation and Initalization


//Handling input/output/string manipulation & choices.
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

function playerChoosesSquare(board) {
  let legalMoves = legalSquares(board);
  while (true) {
    prompt(`Please choose a square: ${joinOr(legalMoves, ", ", "or")}.`);
    debugger
    let square = READLINE.question().trim();
    if (legalSquares(board).includes(square)) {
      board[square] = board.playerMark;
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
    playerChoosesSquare(board);
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
  let moves = legalSquares(board);
  let bestScore = -Infinity;
  let cpuChoice;
  for (let idx = 0; idx < moves.length; idx += 1) {
    let previousEntry = board[moves[idx]];
    board[moves[idx]] = CPU_MARK;
    let moveWeight = minimax(board, false);
    board[moves[idx]] = previousEntry;

    console.log(`moveWeight: ${moveWeight}\nIndex: ${idx} ${board[moves[idx]]} `);
    if (moveWeight > bestScore) {
      bestScore = moveWeight;
      cpuChoice = idx;
    }
  }
  board[moves[cpuChoice]] = CPU_MARK;

  // let cpuSquare =
  // legalSquares(board)[Math.floor(Math.random() * legalSquares(board).length)];
  // board[cpuSquare] = board.cpuMark;

}
// eslint-disable-next-line max-lines-per-function, max-statements
function minimax(board, cpuTurn) {
  let scores = {
    Player : -10,
    Computer : 10,
    tie : 0
  };

  let results = detectWinner(board);
  if (results !== null) {
    return scores[results];
  }

  let moves = legalSquares(board);

  if (cpuTurn) {
    let bestScore = -Infinity;
    for (let idx = 0; idx < moves.length; idx += 1) {
      let previousEntry = board[moves[idx]];
      board[moves[idx]] = CPU_MARK;
      let score = minimax(board, false);
      board[moves[idx]] = previousEntry;
      bestScore = Math.max(bestScore, score);
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let idx = 0; idx < moves.length; idx += 1) {
      let previousEntry = board[moves[idx]];
      board[moves[idx]] = PLAYER_MARK;
      let score = minimax(board, true);
      board[moves[idx]] = previousEntry;
      bestScore = Math.min(bestScore, score);
    }
    return bestScore;
  }
}

//Resolving the game/score keeping.
function boardFull(board) {
  return legalSquares(board).length < 1;
}

function detectWinner(board) {

  for (let line = 0; line < board.winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = board.winningLines[line];
    if ( board[sq1] === board.playerMark &&
         board[sq2] === board.playerMark &&
         board[sq3] === board.playerMark)  {
      return "Player";
    } else if ( board[sq1] === board.cpuMark &&
                board[sq2] === board.cpuMark &&
                board[sq3] === board.cpuMark) {
      return 'Computer';
    } else if (boardFull(board)) {
      return "tie";
    }
  }
  return null;
}

function someoneWonOrTied(board) {
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
      if (someoneWonOrTied(board)) break;

    }

    if (someoneWonOrTied(board)) {
      scoreKeeper(score, detectWinner(board));
      if (matchOver(score)) {
        break;
      }
    }
  }
  if (!playingAgain()) break;
}
