function madlibs(template) {
  replacements = {
    noun : ["fox", "dog", "head", "leg", "tail", "cat"],
    adjective : ["quick", "lazy", "sleepy", "noisy", "hungry"],
    verb : ["jumps", "lifts", "bites", "licks", "pats"],
    adverb : ["easily", "lazily", "noisily", "excitedly"] 
  }
  
  const REGEX = new RegExp("/{[a-z]+}", "gi");
  
  function replaceText(match) {
  let key = match.replace(/[^a-z]/g, "");
  //strip the match of it's brackets
  let index = Math.floor(Math.random() * replacements[key].length);
  //get a random index
  //replace the value with it's random
  return replacements[key][index];
  }

  let st = template.replace(/{[a-z]+}/g, replaceText);
  //replace text is a cb function
  // will iterate through every word, basically.


  // let sentence = template.split(" ").map(element => {
  //   let regex = new RegExp("(?<={).*(?=})", "gi");
  //   element = element.replace(regex, )
  //   if(Object.hasOwn(replacements, element)) {
  //     let random = getRandomWord(replacements[element])
  //     return random;
  //   } else {
  //     return element;
  //   }
  // })

}

// function madLibsReplace(word) {
// }

// function getRandomWord(arr) {
//   return arr[Math.floor(Math.random() * arr.length)]
// }


let template1 = 
"The {adjective} brown {noun} {adverb} " +
"{verb} the {adjective} yellow " +
"{noun}, who {adverb} {verb} his " +
"{noun}, and looks around.";


// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".


/*

Wouldn't mind re-doing this one using 

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;

  regex for punctuation control. 
*/