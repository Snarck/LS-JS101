function penultimate(string) {
  let arr = string.split(" ");
  return arr[arr.length - 2];
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("Hey friends! What's up?"));

function midultimate(string) {
  let arr = [];
  if (string.trim() !== '') {
    arr = string.split(" ");
  } else {
    return "Invalid entry, sorry";
  }
  if (arr.length < 1) {
    return "Invalid entry, sorry";
  }
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    let word1 = arr[arr.length / 2];
    let word2 = arr[(arr.length / 2) - 1];
    return word1 + " " + word2;
  }
}

console.log(midultimate("Hello, my name is Inigo Montoya")); // expected name is
console.log(midultimate("You killed my father.")); //expected "killed my"
console.log(midultimate("Prepare to die")); //expected to;