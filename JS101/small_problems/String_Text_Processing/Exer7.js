function staggeredCase(string, countNA = false) {
  counter = 0;
  return string.split("").map((str) => {
    if (str >= "A" && str <= "z") {
      let char = counter % 2 === 0 ? str.toUpperCase()
                                   : str.toLowerCase();
      counter += 1;
      return char;
    } else {
      if(countNA) {
        counter += 1;
      }
      return str;
    }
  }).join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(
  staggeredCase("ignore 77 the 444 numbers", true) === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase("ignore 77444 numbers", true))
console.log(staggeredCase("ignore 77444 numbers", false))