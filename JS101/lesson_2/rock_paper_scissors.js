const readline = require ('readline-sync');
/*I would have preferred splitting RPS_rules.json into two.
But for the sake of the code review, I left it one.
I also decided to use objects stored into the JSON to
handle my game rules (such as rock beats scissors)
This allowed me to have more freedom with the messages.*/
const rules = require('./RPS_rules.json');
const VALID_CHOICES = ['rock', 'r', 'paper', 'p', 'scissors', 's', 'lizard', 'l', 'spock', 'sp'];
const VALID_CPU_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
/* I'm not a fan of the const arrays up here.
I kept them in because of the original code-walkthrough.
I didn't want to change too much*/


// Prompts for input to set game-state.
function menu() {

  while (true) {
    prompt(rules["menu"]["greeting"]);
    prompt("Please select one of the following:");
    prompt("1) Play Game (default choice)");
    prompt("2) Read Instruction");
    prompt("3) Exit Game\n");

    let choice = readline.prompt();
    if (choice === "2") {
      console.clear();
      prompt(rules["menu"]["instructions1"]);
      prompt(rules["menu"]["instructions2"]);
      prompt(rules["menu"]["instructions3"]);

    } else if (choice === "3") {
      return false;
    } else {
      return true;
    }
  }
}
/*validates the input entered by the user
If they enter something invalid it keeps reprompting.
I'm not proud of how I handled if they enter an abbreviation.
Would love to know another way to handle this function.*/
function validateInput(choice) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    prompt("The valid choices are:");
    prompt(VALID_CHOICES.join(', ').trim() + '.');
    choice = readline.prompt();
  }
  if (choice.length > 2) {
    return choice;
  } else {
    return (VALID_CHOICES[VALID_CHOICES.indexOf(choice) - 1]);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

//Checks the winner of the match and updates the winOrLose array to keep track.
function checkMatchWinner(choice, computerChoice, winOrLose) {

  if (rules[choice]["winsAgainst"].includes(computerChoice)) {
    winOrLose[0] += 1;

  } else if (rules[choice]["losesAgainst"].includes(computerChoice)) {
    winOrLose[1] += 1;
  }

}

//Checks if the user won or loss the championship
//Adjusts gamestate accordingly.
function checkIfChampion(winOrLose) {

  if (winOrLose[0] === 3) {
    prompt(rules["grandwinner"]["win"]);
    return false;
  } else if (winOrLose[1] === 3) {
    prompt(rules["grandwinner"]["lose"]);
    return false;
  }
  return true;
}

//I tried different math.*(Math.random), I found this to be the best for me.
function cpuChoice() {
  let randomIndex = Math.floor(Math.random() * (VALID_CPU_CHOICES.length));
  return VALID_CPU_CHOICES[randomIndex];
}

//Formats each round of the match.
function matchHeader(choice, computerChoice, winOrLose) {
  console.clear();
  prompt(`${choice.toUpperCase()} vs. ${computerChoice.toUpperCase()}`);
  prompt(rules[choice][computerChoice]);
  prompt(`The current score total is:\n=> USER: ${winOrLose.join(" COMPUTER: ")}\n`);
}

//I decided on a do-while so I could keep variables more in scope.
do {
  console.clear();
  let winOrLose = [0, 0];
  let playingRPS = menu();
  //I wasn't sure how to handle exiting the app. I did my best.
  let exit = playingRPS;

  while (playingRPS) {

    prompt(`Choose one: (R)ock, (P)aper, (S)cissors, (L)izard, (SP)ock.`);

    let choice = validateInput(readline.prompt().toLowerCase());
    let computerChoice = cpuChoice();

    matchHeader(choice, computerChoice, winOrLose);
    checkMatchWinner(choice, computerChoice, winOrLose);

    playingRPS = checkIfChampion(winOrLose);

  }

  if (exit) {
    prompt("Would you like to return to the menu play again? Y/N");
    if (readline.question().toLowerCase() !== "y") {
      break;
    }
  } else {
    break;
  }

} while (true);