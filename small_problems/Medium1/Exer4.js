function minilang(string) {
  let register = 0;
  let stack = [];

  string.split(" ").forEach(command => {
    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        isStackEmpty(stack) ? errorMessage() :
          register += stack.pop();
        break;
      case "SUB":
        isStackEmpty(stack) ? errorMessage() :
        register -= stack.pop();
        break;
      case "MULT":
        isStackEmpty(stack) ? errorMessage() :
        register *= stack.pop();
        break;
      case "DIV":
        isStackEmpty(stack) ? errorMessage() :
        register = Math.floor(register / stack.pop());
        break;
      case "REMAINDER":
        isStackEmpty(stack) ? errorMessage() :
        register = Math.floor(register % stack.pop());
        break;
      case "POP":
        isStackEmpty(stack) ? errorMessage() :
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;

      default:
        if (!isNaN(Number.parseInt(command))) {
          register = Number(command);
        } else if (stack.length < 1) {
          return undefined;
        }
    }
  })
}

function errorMessage() {
  console.log("Invalid Stack");
}

function isStackEmpty(stack) {
  return stack.length === 0;
}
minilang("MULT");
minilang("5 PUSH 10 PUSH 15 PUSH 25 PUSH");
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

