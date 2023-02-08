function fridayThe13ths(year) {
  const FRIDAY = 5;
  let counter = 0;

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13).getDay();
    if (date === FRIDAY) {
      counter += 1;
    }
  }
  console.log(counter);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/*

input - a year
output - integer representing the number of days that are fri13 "1", "2",

- safe to assume we can use the gregorian calender, all years will
be after 1752
  - avg calendar year is 365.2425 days
  - leap years are years divisible by 4, except years that are exactly divisible
    by 100, unless those are divisible by 400
      - if(year % 400) = leap year,  else if year % 100 false. 
        else if year divisible by 4, true. 

data structure:
Can we get the date using DATE? 
can use date(year, index, 13) to get the date for each month.
the date 

date.getDay() === 5  means friday.

friday is indexed at 5.

if friday, increment amounts by 1. 

*/