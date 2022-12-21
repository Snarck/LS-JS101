let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));
console.log(ages.hasOwnProperty("Lily"));
console.log(Object.hasOwn(ages, "Spot"));
console.log(Object.hasOwn(ages, "Lily"));

