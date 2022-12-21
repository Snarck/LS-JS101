const getInput = require('readline-sync');
const msg = require('./loanCalculator_msg.json');
let languagePref = 'en';
let loanAmount = 0;
let aprAmount = 0;
let loanDuration = 0;


function prompt(languagePref, message, optionalString = '') {
  //Populating output with Language Preference / JSON and an optional String.
  console.log(msg[languagePref][message] + optionalString);
}

function inputValidator(input) {
  // Validating input from users, checking for "q" otherwise, validate numbers.
  if (input.toLowerCase() === "q") {
    return input;
  }
  while (input.trimStart() === '' || Number.isNaN(Number(input)) || Number(input) < 1 ) {
    prompt(languagePref, 'inputInvalid');
    input = getInput.question();
  }
  return input;
}

function quitter(input) {
  //This function is just to make later code easier to read.
  if (input.toLowerCase() === "q") {
    return true;
  } else {
    return false;
  }
}

function calculateResults(loanAmount, aprAmount, loanDuration) {
  //We calculate and return the loan.  Have to validate aprAmount.
  aprAmount = (aprAmount / 100) / 12;
  let monthlyPayment =
  (loanAmount * (aprAmount / (1 - Math.pow((1 + aprAmount), (-loanDuration)))));

  return `$${monthlyPayment.toFixed(2)}`;
}

prompt(languagePref, "language");
languagePref = ['es', '2', 'espanol'].includes(getInput.question().toLowerCase()) ? "es" : "en";

prompt(languagePref, "greeting");

//main loop. Quitter lets us break out of the loop whenever we input Q.
//Iterate through loop, asking for each of the required inputs.
while (true) {

  prompt(languagePref, "loanAmount");
  loanAmount = inputValidator(getInput.question());
  if (quitter(loanAmount)) {
    break;
  }

  prompt(languagePref, "aprAmount");
  aprAmount = inputValidator(getInput.question());
  if (quitter(aprAmount)) {
    break;
  }

  prompt(languagePref, "loanLength");
  loanDuration = inputValidator(getInput.question());
  if (quitter(loanDuration)) {
    break;
  }

  let result = calculateResults(loanAmount, aprAmount, loanDuration);
  prompt(languagePref, "results", result);

  prompt(languagePref, "again");
  if (quitter(getInput.question())) {
    break;
  }
}

prompt(languagePref, "goodbye");


