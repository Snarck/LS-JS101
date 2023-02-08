function staggeredCase(string) {
  return string.split("").map((str, arrIndex) => {
    return arrIndex % 2 === 0 ? str.toUpperCase()
                              : str.toLowerCase();
  }).join("");


}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"