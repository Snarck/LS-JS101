// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// not manipulating hte array itself.  Just the variables. 
// Means that the parameters are not in scope for the rest of the program
// because you can't assign by value an object in JS


// one two three -- we're not updating the values! We're making shadow arrays that are out of scope!!

// two three one  // splice mutates the original arrays!!

