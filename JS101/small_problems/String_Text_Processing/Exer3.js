function letterCaseCount(string) {
  const LETTERCASES = {
    lowercase : 0,
    uppercase : 0,
    neither : 0,
  }
  
  string.split("").map(char => {

   if(char >= "A" && char <= "Z") {
    LETTERCASES.uppercase += 1;
   } else if(char >= "a" && char <= "z") {
    LETTERCASES.lowercase += 1;
   } else {
    LETTERCASES.neither += 1;
   }

  })
console.log(LETTERCASES);

}





letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }