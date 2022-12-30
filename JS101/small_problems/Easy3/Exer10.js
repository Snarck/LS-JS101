function century(number) {

  let year = Math.ceil((number / 100));
  let stringYear = String(year);
  switch (stringYear[stringYear.length - 1]) {
    case "0":
      return console.log(stringYear + "th");
    case "1":
      return console.log(stringYear + "st");
    case "2":
      return console.log(stringYear + "nd");
    case "3":
      return console.log(stringYear + "rd");
    default:
      return console.log(stringYear + "th" + " default");
  }
  
}



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"