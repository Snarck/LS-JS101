const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(word, sentence) {
//   if(!word || !sentence) {
//     return;
//   }
//   return sentence.split(" ").filter(element => {
//     return element.toLowerCase() === word.toLowerCase();
//   }).length

// }

function searchWord(word, sentence) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  let matches = sentence.match(regex);
  console.log(matches ? matches.length : 0);
}



// function searchWord(word, sentence) {
// let counter = 0;
// word = word.toLowerCase();
// sentence = sentence.toLowerCase();
// while(sentence.includes(word)){
//   sentence = sentence.replace(word, "");
//   counter += 1;
// }
// console.log(counter);


// }

searchWord('qui', text);      // 3