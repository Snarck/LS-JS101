const READLINE = require('readline-sync');


//deck manipulation/creation.
function instantiateDeck() {
  const SUITS = ["Hearts", "Spades", "Clubs", "Diamonds"];
  const SUIT_SIZE = 13;
  const DECK = [];

  SUITS.forEach(cardSuit => {
    for (let cardValue = 1; cardValue <= SUIT_SIZE; cardValue += 1) {
      DECK.push(createCard(cardSuit, cardValue));
    }
  });
  // DECK.forEach(element => {
  //   element["output"].forEach(ele => console.log(ele))
  // })

  return DECK;
}

function createCard(cardSuit, cardValue) {
  let card = {
    name: getCardName(cardValue),
    suit: cardSuit,
  }
  if (cardValue === 1) {
    card["value"] = 11;
  } else if (cardValue > 10) {
    card["value"] = 10;
  } else {
    card["value"] = cardValue;
  }
  card["ascii"] = createAscii(card);
  return card;
}

function getCardName(cardValue) {
  const NAMES = {
    1 : "Ace", 2 : "Two", 3 : "Three", 4 : "Four", 5 : "Five",
    6 : "Six", 7 : "Seven", 8 : "Eight", 9 : "Nine", 10 : "Ten",
    11 : "Jack", 12 : "Queen", 13 : "King"
  }
  return NAMES[cardValue];
}

function createAscii(card) {
  const OUROBOROS =  "+=====+";
  const MID = "|     |";

  let name;
  if (card.name === "Ace"   ||
      card.name === "Jack"  ||
      card.name === "Queen" ||
      card.name === "King") {
    name = card.name[0].toUpperCase();
  } else {
    name = String(card.value);

  }
  let mainArt = `|${name.padEnd(5, " ")}|`;
  let mainArt2 = `|${name.padStart(5, " ")}|`;

  let ascii = [OUROBOROS, mainArt, MID, mainArt2, OUROBOROS];
  return ascii;
}

function shuffleDeck(deck) {
  for (let idx = 0; idx < deck.length - 1; idx += 1 ) {
    let randomNumber = Math.floor(Math.random() * deck.length);
    let temp = deck[idx];
    deck[idx] = deck[randomNumber];
    deck[randomNumber] = temp;
  }
}

function unShuffleDeck(deck, playerHand, cpuHand) {
  deck.concat(playerHand.cards, cpuHand.cards);
  playerHand.cards = [];
  cpuHand.cards = [];
}
/// done with deck manipulation


//hands, drawing cards, calculating amounts.
function instantiateHands(competitor) {
  return {
    total : 0,
    cards : [],
    name : competitor,
    lastDrawn : "",
    wins : 0,
  };
}

function drawCard(deck, hand) {
  let card = deck.pop();
  hand.cards.push(card);
  hand.lastDrawn = `${card.name} of ${card.suit}`;
  calculateTotal(hand);
}

function drawStarterCards(deck, playerHand, cpuHand) {
  drawCard(deck, playerHand);
  drawCard(deck, playerHand);
  drawCard(deck, cpuHand);
  drawCard(deck, cpuHand);
}

function resetHands(deck, playerHand, cpuHand) {
  playerHand.total = 0;
  cpuHand.total = 0;
  playerHand.lastDrawn = "";
  cpuHand.lastDrawn = "";
  unShuffleDeck(deck, playerHand, cpuHand);
}

function calculateTotal(hand, hidden = true) {
  if (hand.name === "computer" && hidden) {
    hand.total = hand.cards[0].value;
    return;
  }
  hand.total = 0;
  hand.cards.forEach(card => {
    hand.total += Number(card.value);
  });
  correctForAces(hand);
}

function correctForAces(hand) {
  hand.cards.filter(card => card.name === "ace").forEach(_ => {
    if (hand.total > 21) hand.total -= 10;
  });
}

function sortHand(hand) {
  hand.cards = hand.cards.sort((a, b) => {
    a = getSortValue(a);
    b = getSortValue(b);
    return b - a;
  });
}

function getSortValue(card) {
  switch (card.name) {
    case "Ace" :
      return 15;
    case "Jack":
      return 11;
    case "Queen":
      return 12;
    case "King":
      return 13;
    default:
      return card.value;
  }
}

//end of hands, drawing cards, calculating amounts and sorting..


//creating gamefield UI
function displayGame(playerHand, cpuHand, hidden = true) {
  const BORDER = 47;
  console.clear();
  logAsciiInHand(cpuHand, hidden);
  formatToBorder(BORDER, `TOTAL: ${cpuHand.total}`, " ", "|||", "|||");
  formatToBorder(BORDER, ` ${cpuHand.name.toUpperCase()}:`, "|");
  //console.log();
  formatToBorder(BORDER, `Previous Draw : ${playerHand.lastDrawn}`, " ");
  formatToBorder(BORDER, ` ${playerHand.name.toUpperCase()}:`, "|");
  formatToBorder(BORDER, `TOTAL: ${playerHand.total}`, " ", "|||", "|||");
  logAsciiInHand(playerHand, false);
  formatToBorder(BORDER, `Wins: ${playerHand.wins} || Losses: ${cpuHand.wins}`, " ", "1) HIT", " STAY (2");

}

function logAsciiInHand(hand, hidden) {
  let asc = hidden ? getHiddenAscii(hand) : getAscii(hand);
  let seperator = (hand.cards.length > 6) ? "" : " ";

  asc.forEach(ascii => {
    console.log("" + ascii.join(seperator) + "");
  });
}

function getAscii(hand) {
  let rows = [[], [], [], [], []];
  let cards = hand.cards;

  for (let idx = 0; idx < cards.length; idx += 1) {
    let ascii = cards[idx].ascii;

    for (let row = 0; row < rows.length; row += 1) {
      if (cards.length > 6 && idx !== 0) {
        rows[row].push(ascii[row].slice(4));

      } else {
        rows[row].push(ascii[row]);
      }
    }
  }
  return rows;
}

function getHiddenAscii(hand) {
  let rows = [[], [], [], [], []];
  let cards = hand.cards;
  let flippedTemplate = [
    "+=====+", "|3<3<3|", "|<3<3<|", "|3<3<3|", "+=====+"
  ];
  for (let idx = 0; idx < rows.length; idx += 1) {
    rows[idx].push(cards[0].ascii[idx]);
  }

  for (let numOfCards = cards.length; numOfCards > 1; numOfCards -= 1 ) {
    rows.forEach((element, index) => {
      if (cards.length > 6) {
        element.push(flippedTemplate[index].slice(4));
      } else {
        element.push(flippedTemplate[index]);
      }
    });
  }
  return rows;

}

function formatToBorder(BORDER, output, padding, leftPillar = "", rightPillar = "") {
  if (output.length % 2 === 0) {
    output += " ";
  }
  let LENGTH = output.length;
  let pillarLength = leftPillar.length + rightPillar.length;
  let gameBorder = Math.floor(((BORDER - LENGTH) - pillarLength)  / 2);
  let pads = padding.repeat(gameBorder);
  console.log(`${leftPillar}${pads}${output}${pads}${rightPillar}`);

}


///gameplay turns/input/output and win conditions.
function playerTurn(playerHand, cpuHand, deck) {
  const REGEX = new RegExp("\\b(1|2)\\b", "i");
  while (true) {
    displayGame(playerHand, cpuHand);
    let userInput = READLINE.question();
    if (REGEX.test(userInput)) {
      if (userInput === "1") {
        drawCard(deck, playerHand);
        sortHand(playerHand);
        if (didItBust(playerHand)) {
          break;
        }
      } else {
        break;
      }
    } else {
      console.log("Sorry, only accepting 1 or 2");
    }

  }

}

function cpuTurn(playerHand, cpuHand, deck) {
  calculateTotal(cpuHand, false);
  displayGame(playerHand, cpuHand, false);
  READLINE.question("CPU's turn! Press anything to continue!");
  while (cpuHand.total < 17) {
    drawCard(deck, cpuHand);
    calculateTotal(cpuHand, false);
    displayGame(playerHand, cpuHand, false);
    if (didItBust(cpuHand)) {
      READLINE.question("Computer BUSTED!");
    } else {
      READLINE.question("Push anything to continue!");
    }

  }
}

function didItBust(hand) {
  if (hand.total > 21 || hand.total === "BUST!!!") {
    hand.total = "BUST!!!";
    return true;
  } else {
    return false;
  }
}

function incrementWin(hand) {
  hand.wins += 1;
  displayWinner(hand);
}

function updateWinners(playerHand, cpuHand, finalRound = false) {
  if (playerHand.total === "BUST!!!") {
    incrementWin(cpuHand);
  } else if (cpuHand.total === "BUST!!!") {
    incrementWin(playerHand);
  } else if (finalRound) {
    if (playerHand.total > cpuHand.total) {
      incrementWin(playerHand);
    } else if (playerHand.total < cpuHand.total) {
      incrementWin(cpuHand);
    } else {
      READLINE.question("Draw!");
    }
  }
}


function displayWinner(hand) {
  READLINE.question("It's over! " + hand.name + " wins!");
}


let deck = instantiateDeck();
let playerHand = instantiateHands("player", deck);
let cpuHand = instantiateHands("computer", deck);
while (cpuHand.wins < 5 && playerHand.wins < 5) {
  while (true) {
    resetHands(deck, playerHand, cpuHand);
    shuffleDeck(deck);
    drawStarterCards(deck, playerHand, cpuHand);

    playerTurn(playerHand, cpuHand, deck);
    displayGame(playerHand, cpuHand);

    if (didItBust(playerHand)) {
      updateWinners(playerHand, cpuHand);
      break;
    }

    cpuTurn(playerHand, cpuHand, deck);
    updateWinners(playerHand, cpuHand, true);
    break;
  }
}

