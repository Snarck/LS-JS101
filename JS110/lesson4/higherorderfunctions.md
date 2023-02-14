<!-- 
  [[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
}); 
-->

We're doing a method call on the outer array [[1, 2], [3, 4]]
That method is "Map"

We're initializing the variable "arr"
And a callback fn {
  console.log(arr[0]);
  return arr[0]
}
The return value of map will be [1, 3]
Side effects: calls a function with a side effect. 


We're invoking console.log(arr[0]).  Return is undefined for each iteration.  It performs a side effect of outputting a string.
Return is not used. 

We're accessing the element of arr[0],  which is 1, and 3. 
We're returning arr[0] which is 1 and then 3. 

##----------##


let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});


forEach method invocation on [[18, 7], [3, 12]]
Return yes, stored in myArr "undefined" 
Side effects?  Yeah; it calls a function with a side effect. 

map method (invoked twice) on the parameter "arr", representing the first array in a nested array,  invocation with the argument num. 
return value undefined (3x), not used.
side effects exist.  

console.log invocation, outputs "18, 7, 12" and returns undefined. 
side effect.

///

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

map method invocation on the outter array [[1, 2,], [3, 4]]
return value? yes.  not used.  : return value here [2, 4], [6, 8]
iterates through each nested array, represented by the variable "arr". 

map method invocation called on the nested arr each iteration, 
return value used? used by previous invocation of map.  returns: [2, 4] (first iteration)
[6, 8] (second iteration)


arguments: callback fn and a number rpresenting each element in the nested array. 

///

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});


Array containing two objects. 

Method invocation on the outer-array with nested objects, "Filter" with the argument "object" and the callback function 
side effects? no.  Return? not used, but it's: 
 {
  return Object.keys(object).every(key => object[key][0] === key);
}

key method invokation on the nested objects (2x iterations)
returns an array containing every key of the nested object,
["a", "b"] for first iteration and ["c", "d"] for second.
used? yeah, by the method invocation every
with the argument "key" and the bracket property reference on the nested object (a: ant..etc) on first iteration and the {c..} on second. 

Because {a...}["a"][0] = (a) === "a" = true
but.. {...b}["b"] = "e" == not true
the first iteration is "no"

second iteration is "true", ergo

the return value of filter is an array only containing the second nested object {...d}

//


[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});


nested array containing two elements (a list of numbers and one of strings)

map is called on it, creating a loop of each nested collection [8...] and ['apple'...]
filter is called on each nested collection, [8..] etc. 

filter checks if it's a number, and returns true/false:
[false, false, true] = [27] is the return value of Filter, which is then stored in a new array:  [27], 

The second iteration returns: 
true, false, false, giving us: [apple]. 
Making the return of filter:
[27], [apple]

and making the return of map:
[[27], [apple]]

////

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});


[ [[1, 2], [3, 4]], [5, 6] ].map
arr = [[1, 2], [3, 4]], [5, 6]

elem = 
[1, 2], [3, 4], 5, 6
return value: 
  [2, 3], [4, 5]  6, 7
  [[[2, 3], [4, 5]], [6, 7]]
