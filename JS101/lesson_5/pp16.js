let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// easiest way.. 
console.log(Object.fromEntries(arr));

const obj = {};

arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
})
console.log(obj);