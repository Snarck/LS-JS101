function longestSentence(paragraph) {
  let sentences = {};
  let punct = [".", "!", "?"];
  let arr = [];

  paragraph.split(" ").forEach(element => {
    if(punct.includes(element[element.length - 1])) { 
      arr.push(element);
      sentences[arr.length] = arr.join(" ").trim();
      arr = [];
    } else {
      arr.push(element);
    }
  })

  let finished = findLongest(sentences);
  console.log(finished[0] + finished[1]);

}

function findLongest(obj) {
  arr = Object.keys(obj).sort((a, b) => b - a);

  return [obj[arr[0]], `The longest sentence has ${arr[0]} words`]
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/*
input - paragraph
output - longest sentence in paragraph and word count. 

a sentence ends with either: a period ( . ), exclamation ( ! ) or question ( ? )

spaces don't count.  Punctuation must be preserved. 


array - 

if we convert it to an array and iterate through until a word ends with . ! or ?
we can push all those values to an array and store it in an object with the sentence
and word count.

Then we just need to find the object with the highest wordcount and return it. 
Will need to join the string and trim it. 


I lose spaces.  

Function recommends using a match - 
Redo this with a regExp match. 


w.*?[.!?] should match the sentence until punctuation.
It'll get stored in array from Match.
If we sort the array
the longest sentence should be first,

Match and store into an array.
Longest word count sorted 


*/