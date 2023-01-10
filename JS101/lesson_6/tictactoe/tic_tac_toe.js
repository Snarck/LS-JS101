const READLINE = require('readline-sync');
const SETTINGS = initiateSettings();


//settings and menu. There's so many.  Sorry!
function displayMenu() {
  console.clear();
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
  console.log("|| _____  _            _____                 _____            ||");
  console.log("|||_   _|(_)  ___     |_   _|__ _   ___     |_   _|___    ___ ||");
  console.log("||  | |  | | / __|_____ | | / _` | / __|_____ | | / _ \\  / _ \\||");
  console.log("||  | |  | || (__|_____|| || (_| || (__|_____|| || (_) ||  __/||");
  console.log("||  |_|  |_| \\___|      |_| \\__,_| \\___|      |_| \\___/  \\___|||");
  console.log("||||                Welcome to Tic-Tac-Toe!                 ||||");
  console.log("||||                                                        ||||");
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
  console.log("            Please select from one of the following:  ");
  console.log("                       1) Play Game");
  console.log("                       2) Settings");
}

function inMenuSelection() {
  //This should actually be part of Handling Input/Output.
  //Left it here to make it easy to remove everything related to menus.
  displayMenu();
  const REGEX = new RegExp("^[12]$", "i");

  while (true) {
    let selection = READLINE.prompt();

    if (REGEX.test(selection)) {
      if (selection === "1") {
        return false;
      } else {
        changeSettings();
        return true;
      }
    } else {
      prompt(`1 or 2, you entered ${selection}`);
    }
  }
}

function displaySettings() {
  console.clear();
  console.log(`
  Welcome to the settings!
  For non-true/false settings, select them to cycle through the settings!\n
  Select who goes first. This also determines if you are X or O.
  1) Player Goes First: ${SETTINGS.playerFirst}\n
  How many rounds are there in a match?\n  2) ${SETTINGS.howManyWins} match\n
  CPU Difficulty: Easy, Normal, Hard\n  3) ${SETTINGS.difficulty}\n
  If you can see these emoji: ❌ ⭕ your terminal is emoji safe!
  Please disregard the following settings if you do not!
  4) Emoji Support Enabled: ${SETTINGS.emojiSupport}\n`);
  if (SETTINGS.emojiSupport) {
    console.log("  Player who plays first on the left.");
    console.log(`  Current Marks: ${SETTINGS.marks[SETTINGS.currentMarks].join(" ")}`);
    console.log(`  5) Change Mark\n`);
  } else { SETTINGS.currentMarks = "default" }
  console.log(`Q) exit settings`);
}

function changeSettings() {
  //This should actually be part of Handling Input/Output.
  //Left it here to make it easy to remove everything related to menus.
  displaySettings();
  while (true) {
    let regex = SETTINGS.emojiSupport ? "^[12345Qq]$" : "^[1234Qq]$";
    const tester = new RegExp(regex, "i");

    let input = READLINE.prompt();
    if (tester.test(input)) {
      if (input === "Q" || input === "q") {
        return;
      } else {
        changeSettingsLogic(input);
        displaySettings();
      }
    } else {
      prompt("Sorry, invalid input.");
    }
  }
}

function changeSettingsLogic(input) {
  switch (input) {
    case "1" :
      SETTINGS.playerFirst = !SETTINGS.playerFirst;
      break;
    case "2" :
      SETTINGS.howManyWins = updateWinsSetting(SETTINGS.howManyWins);
      break;
    case "3" :
      SETTINGS.difficulty = updateDifficultySetting(SETTINGS.difficulty);
      break;
    case "4" :
      SETTINGS.emojiSupport = !SETTINGS.emojiSupport;
      break;
    case "5" :
      SETTINGS.currentMarks = changeEmojiLogic(SETTINGS.currentMarks);
      break;
  }

}

function changeEmojiLogic(emojiSet) {
  switch (emojiSet) {
    case "default":
      return "classic";
    case "classic":
      return "dogCat";
    case "dogCat":
      return "cowboyAlien";
    case "cowboyAlien":
      return "moonSun";
    case "moonSun":
      return "default";
    default:
      return "default";
  }
}

function initiateSettings() {
  return {
    emojiSupport: false,
    currentMarks : "default",
    marks : {
      default : [" X", " O"],
      classic : ["❌", "⭕"],
      dogCat : ["🐶", "🐱"],
      cowboyAlien : ["🤠", "👽"],
      moonSun : ["🌚", "🌞"]
    },
    characterSet: "default",
    playerFirst: true,
    howManyWins: 1,
    difficulty: "Normal",
  };
}

function updateWinsSetting(number) {
  switch (number) {
    case 1:
      return 3;
    case 3:
      return 5;
    case 5:
      return 1;
    default:
      return 1;
  }
}

function updateDifficultySetting (string) {
  switch (string) {
    case "Easy":
      return "Normal";
    case "Normal":
      return "Hard";
    case "Hard":
      return "Easy";
    default:
      return "Easy";
  }
} // done with settings and menu (so many.  Sorry!!!)


//Board Output and intializiation
function displayBoard(board) {
  const BOARD_OUROBOROS = ("");
  const BOARD_VERT = ('     |     |');
  const BOARD_HOR = ('-----+-----+-----');
  let topRow = ` ${board[1]}  | ${board[2]}  |  ${board[3]}  `;
  let midRow = ` ${board[4]}  | ${board[5]}  |  ${board[6]}  `;
  let botRow = ` ${board[7]}  | ${board[8]}  |  ${board[9]}  `;

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
    1 : " 1",  2 : " 2", 3 : " 3",
    4 : " 4",  5 : " 5", 6 : " 6",
    7 : " 7",  8 : " 8", 9 : " 9",

    playerMark : " O",
    cpuMark : " X",

    winningLines : [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ]
  };
}

function getPlayerMark() {
  if (SETTINGS.playerFirst) {
    return SETTINGS.marks[SETTINGS.currentMarks][0];
  } else {
    return SETTINGS.marks[SETTINGS.currentMarks][1];
  }
}

function getCPUMark() {
  if (!SETTINGS.playerFirst) {
    return SETTINGS.marks[SETTINGS.currentMarks][0];
  } else {
    return SETTINGS.marks[SETTINGS.currentMarks][1];
  }
}

function initalizeScore() {
  return {
    playerScore : 0,
    cpuScore : 0,
    winsNeeded : SETTINGS.howManyWins,
    tie : 0,
  };
}

function displayScore(score) {
  if (score.winsNeeded > 1) {
    prompt(`Player Wins: ${score.playerScore} Computer Wins: ${score.cpuScore}`);
  }

  prompt(`Number of matches resulting in ties: ${score.tie}`);
  prompt(`Playing until someone wins ${score.winsNeeded} games.`);
}

function legalSquares (board) {
  let legalSquares = [];
  for (let idx = 1; idx < 10; idx += 1) {
    let index = String(idx);
    if (board[index].trim() === index) {
      legalSquares.push(index);
    }
  }
  return legalSquares;
}

function gameHeader(board, score) {
  console.clear();
  prompt(`You are ${board.playerMark}. Computer is ${board.cpuMark}`);
  displayScore(score);
  displayBoard(board);
} //Done handling Board Output and Initalization


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
}
//Done handling input/output/choices.


//Handling computer turn:
function cpuChoosesSquare(board) {
  let legalMoves = legalSquares(board);
  let cpuSquare;

  if (SETTINGS.difficulty === "Normal") {
    //give a 1/3 chance of picking something at random.
    let randomChance = Math.round(Math.random() * 2);
    if (randomChance > 0) {
      cpuSquare = findBestMove(board, legalMoves);
    } else {
      cpuSquare = findRandomMove(legalMoves);
    }
  }

  if (SETTINGS.difficulty === "Hard") {
    cpuSquare = findBestMove(board, legalMoves);
  }

  if (SETTINGS.difficulty === "Easy") {
    cpuSquare = findRandomMove(legalMoves);
  }
  board[legalMoves[cpuSquare]] = board.cpuMark;

}

function findRandomMove(legalMoves) {
  return Math.floor(Math.random() * legalMoves.length);
}

function findBestMove(board) {
  let bestScore = -Infinity;
  let legalMoves = legalSquares(board);
  let cpuChoice;
  for (let idx = 0; idx < legalMoves.length; idx += 1) {
    let previousEntry = board[legalMoves[idx]];
    board[legalMoves[idx]] = board.cpuMark;
    let moveWeight = minimax(board, false);
    board[legalMoves[idx]] = previousEntry;

    if (moveWeight > bestScore) {
      bestScore = moveWeight;
      cpuChoice = idx;
    }
  }
  return cpuChoice;
}

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

  let legalMoves = legalSquares(board);

  if (cpuTurn) {
    return max(board, legalMoves);
  } else {
    return min(board, legalMoves);
  }
}

function max(board) {
  let legalMoves = legalSquares(board);
  let bestScore = -Infinity;
  for (let idx = 0; idx < legalMoves.length; idx += 1) {
    let previousEntry = board[legalMoves[idx]];
    board[legalMoves[idx]] = board.cpuMark;
    let score = minimax(board, false);
    board[legalMoves[idx]] = previousEntry;
    bestScore = Math.max(bestScore, score);
  }
  return bestScore;

}

function min(board) {
  let legalMoves = legalSquares(board);
  let bestScore = Infinity;
  for (let idx = 0; idx < legalMoves.length; idx += 1) {
    let previousEntry = board[legalMoves[idx]];
    board[legalMoves[idx]] = board.playerMark;
    let score = minimax(board, true);
    board[legalMoves[idx]] = previousEntry;
    bestScore = Math.min(bestScore, score);
  }
  return bestScore;

} // finished handling computer turn


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
    }
  }
  return (boardFull(board)) ? "tie" : null;
}

function someoneWonOrTied(board) {
  return !!detectWinner(board);
}

function scoreKeeper(score, winner) {
  if (winner === "Player") {
    score.playerScore += 1;
  } else if (winner === "Computer") {
    score.cpuScore += 1;
  } else {
    score.tie += 1;
  }

}

function matchOver(score) {
  let wonMatch = score.winsNeeded;
  return score.playerScore === wonMatch || score.cpuScore === wonMatch;
} // Done Resolving the game/score keeping.


//menu loop

while (true) {
  if (!inMenuSelection()) {
    break;
  }
}
while (true) {
  let score = initalizeScore();
  //main game loop
  while (true) {
    let currentPlayer = SETTINGS.playerFirst ? "Player" : "Computer";
    let board = initializeBoard();
    board.playerMark = getPlayerMark();
    board.cpuMark = getCPUMark();

    while (true) {
      gameHeader(board, score);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWonOrTied(board)) {
        gameHeader(board, score);
        break;
      }
    }
    scoreKeeper(score, detectWinner(board));
    if (matchOver(score)) {
      break;
    }
  }
  if (!playingAgain()) break;
}
