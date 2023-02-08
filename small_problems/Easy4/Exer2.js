const rl = require('readline-sync');
const NUMBER_ARRAY = [];
const PROMPT_COUNT = ["Enter the first number: ", "Enter the second number: ", "Enter the third number: ", "Enter the forth number: ",
"Enter the fifth number: ", "Enter the last number: "];
let counter = 0;

function askUserForNumbers() {

  while(NUMBER_ARRAY.length < 6) {
    let prompt = Number(rl.question(PROMPT_COUNT[counter]));
    if(prompt > 0 && prompt !== NaN){
      NUMBER_ARRAY.push(prompt);
      counter += 1;
    } else {
      console.log("Invalid Number");
    }
  }

}

function checkNumberArray (array) {
  let check = NUMBER_ARRAY.pop();
  if(NUMBER_ARRAY.includes(check)) {
    console.log(`The number ${check} appears in ${NUMBER_ARRAY}`);
  } else {
    console.log(`The number ${check} does not appear in ${NUMBER_ARRAY}`)
  }
}

checkNumberArray(askUserForNumbers());
