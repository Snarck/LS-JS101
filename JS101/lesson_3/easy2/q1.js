// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur. important, important";
console.log(advice.replaceAll('important', 'urgent'));
console.log(advice.replace(/important/g, 'urgent'))

//two ways to replace all, one with regex and one with replaceALL