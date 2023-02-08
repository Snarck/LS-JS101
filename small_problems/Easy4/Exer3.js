const rl = require('readline-sync');

/*


*/

function acquireUserInput(userInput) {
  while(userInput === 0 || Number.isNaN(userInput)){
    userInput = rl.question("Please enter a VALID number.");
  }
  return userInput;
}

function returnRetirementAge(age, retirementAge, year) {
  return `It's ${year}.  You will retire in ${Number(year) + Number(retirementAge)}. \n You only have ${Number(retirementAge) - Number(age)} more years to go!`;

}
let today = new Date();
let year = today.getFullYear();
let age = acquireUserInput(rl.question("Please enter your age."));
let retirementAge = acquireUserInput(rl.question("At what age would you like to retire?"));
console.log(returnRetirementAge(age, retirementAge, year));


