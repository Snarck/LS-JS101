let statement = "The Flintstones Rock";

let obj = {};

statement.split("").filter(element => !element.includes(" ")).forEach(element => {
  obj[element] = obj[element] ? obj[element] += 1 : 1;
})
console.log(obj);