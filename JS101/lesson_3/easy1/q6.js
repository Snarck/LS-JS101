// WE have most of hte munster family in our ages object, add entries for Marilyn and Spot

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let combinedAges = Object.assign(ages, additionalAges);
console.log(ages);