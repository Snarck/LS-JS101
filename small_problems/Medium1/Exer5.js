function wordToDigit(str) {
  const NUMBERS = {
    zero : 0, one : 1, two : 2, three : 3,
    four : 4, five : 5, six : 6, seven : 7,
    eight : 8, nine : 9 
  };
 
  
  Object.keys(NUMBERS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    str = str.replace(regex, NUMBERS[word]);
  })

  console.log(str);
}

// function wordToDigit(string) {
//   const NUMBERS = [
//     "zero", "one", "two", "three", "four", "five",
//     "six", "seven", "eight", "nine",
// ]

// return string.split(" ").map(word => {
//   number = formatWord(word);
//   let punct = checkForPunctuation(word) ? checkForPunctuation(word) : undefined;
  
//   if(NUMBERS.includes(number)) {
//     return punct ? NUMBERS.indexOf(number) + punct : NUMBERS.indexOf(number);
//   } else {
//     return word;
//   }
// }).join(" ");

// }
// function formatWord(word) {
//   const REGEX = /[^A-Za-z0-9]/g
//   word = word.replace(REGEX, "");
//   return word.toLowerCase();
// }

// function checkForPunctuation(word) {
//   const REGEX = /[^A-Za-z0-9]/g
//   let punct = word.match(REGEX);
//   if(punct) {
//     return punct.join("");
//   }
// }


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

