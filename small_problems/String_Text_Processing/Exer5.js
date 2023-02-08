function swapCase(string) {
  let arr = string.split("").map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() 
                                       : char.toUpperCase();
  })
  .join("");
  console.log(arr);
}







swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"