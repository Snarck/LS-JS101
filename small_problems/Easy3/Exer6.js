const rl = require('readline-sync');

let verb = rl.question("Please enter a verb.");
let noun = rl.question("please enter a noun.");
let adjective = rl.question("please enter an adjective");
let adverb = rl.question("please enter an adverb");

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? That's cool.`);
console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the lazy ${noun}.`)