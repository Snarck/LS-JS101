function isLeapYear(year) {

  if (year <= 1752) {
    return (year % 4 === 0);
  } else {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
  }

}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true


/*

if the year is greater than 1752, every year divisble by 4 is a leap year
otherwise


*/