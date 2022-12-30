function swap(str) {
  let swap = str.split(' ');
  let finished = [];
  
  swap.forEach(element => {
    if(element.length > 1) {
      finished.push(element.charAt(element.length - 1) + element.slice(1, element.length - 1) + element.charAt(0));
    } else {
      finished.push(element);
    }

  })
  console.log(finished.join(" "));
 
}




swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


/*



*/