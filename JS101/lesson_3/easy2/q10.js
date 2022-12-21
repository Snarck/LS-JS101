// Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(element => element === "t").length)
console.log(statement2.split('').filter(element => element === "t").length)

//review this.  I understand how it works but I didn't think to do this.