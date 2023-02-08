function wordSizes(string) {
  const letterCounter = {

  };
  let words = string.replace(/[^a-zA-Z0-9 \s]/g, '').split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    let wordLength = words[idx].length;
    if (Object.hasOwn(letterCounter, wordLength)) {
      letterCounter[wordLength] = letterCounter[wordLength] += 1;
    } else {
      letterCounter[wordLength] = 1;
    }
  }

  console.log(letterCounter);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
