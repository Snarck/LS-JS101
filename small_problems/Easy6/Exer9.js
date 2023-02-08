function reverseSentence(string) {
  console.log(string.split(" ").reverse().join(" ").trim())
}



reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"