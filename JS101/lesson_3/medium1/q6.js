// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//  false because the only way to test NaN is isNaN(). 
// You can reliably test if a value is NaN by doing... isNaN()