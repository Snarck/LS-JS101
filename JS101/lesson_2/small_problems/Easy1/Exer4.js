const getInput = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = getInput.prompt();

console.log("Enter the width of the room in meters:");
let width = getInput.prompt();

console.log(`The area of your room is: ${width * length} square meters. ${(width * length) * SQMETERS_TO_SQFEET}`);
