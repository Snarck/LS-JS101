//Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//Create a new array that contains all of the above values, but in an un-nested format:

//let arr = [].concat(...flintstones);
//console.log(arr);
console.log(flintstones);

let arr = flintstones.reduce((acc, element) => acc.concat(element), []);

console.log(arr);


/*
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

Note: Spread syntax effectively goes one level deep while copying an array.
Therefore, it may be unsuitable for copying multidimensional arrays. The same is true with Object.assign()
no native operation in JavaScript does a deep clone.
The web API method structuredClone() allows deep copying values of certain supported types.

//let arr = [].concat(...flintstones); 
the [] is because we need a blank array, it copies it to arr.  it can be let tempArray = []
tempArray.concat(...flintstones) (... iterates through an object, up to one layer deep)
If flintstones had a nested-nested array, it wouldn't work.
if we used flintstones.concat(...flintstones) it would iterate the array once, then concat the array again
giving us double, we need to get rid of the first instances. 

Reduce is workign similarly, except we see the iteration.  It's iterating through flintstones and adding each element.
Giving us a clean element without any extra iterations in ARR. 

*/