function letterPercentages(string){ 
  const LC_ARR = string.match(/[a-z]/g);
  const UC_ARR = string.match(/[A-Z]/g);
  const N_ARR = string.match(/[^A-Za-z]/g);

  return {
  lowercase : getPercentage(LC_ARR, string),
  uppercase: getPercentage(UC_ARR, string),
  neither: getPercentage(N_ARR, string)
  }
}

function getPercentage(array, string) {
  return array !== null ? ((array.length / string.length) * 100).toFixed(2)
                        : "0.00";
}


// I want to refactor this as low as possible before moving on.

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }