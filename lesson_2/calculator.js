const msg = require('./calculator_messages.json');
const rl = require('readline-sync');
let lang = "en";

function lng(message, lang='en') {
  return msg[lang][message];
}


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(lng("language", lang))
if(rl.question() === "2") {
  lang = "es";
}

prompt(lng("greeting", lang));


while(true) {

  prompt(lng("firstNum", lang));
  let number1 = rl.question();

  while (invalidNumber(number1)) {
    prompt(lng("notValid", lang));
    number1 = rl.question();
  }

  prompt(lng("secondNum", lang));
  let number2 = rl.question();

  while (invalidNumber(number2)) {
    prompt(lng("notValid", lang));
    number2 = rl.question();
  }

  prompt(lng("operator", lang));
  let operation = rl.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(lng("notValid", lang));
    operation = rl.question();
  }  

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    default:
      prompt(lng("notValid", lang))
  }
  
  if (output) {
    prompt(`${lng("results", lang)} ${output}`);
  }

  prompt(lng("tryAgain", lang));
  let answer = rl.question();
  while(!["y", "n"].includes(answer[0].toLowerCase())) {
    prompt(lng("notValid", lang));
    answer = rl.question();
   }
  if(answer[0].toLowerCase() !== "y") {
    prompt(lng("goodbye", lang));
    break;
  }

}




