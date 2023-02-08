/*

mins-per-day = 24 * 60
hr-per-day = 24
Mins-per-hour = 60
mod the number given by mins-per-day. 

hour = deltamins / minutes per hour
min deltamins % minutes per hour
format

Because we're trying to find the hours before/after midnight. 
To find "before midnight", we need expand the number into deltaminutes and subtract from mins-per-day.

Our time is given as 00:00
Let's convert that into a decimal by splitting it at : and joining it with a . and parseFloat. 


*/

const HR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const MIN_IN_DAY = HR_IN_DAY * MIN_IN_HOUR;


function getDeltaTime(hoursMinutes) {
  let hourAndMinutes = hoursMinutes.split(":");
  let deltaTime = (Number(hourAndMinutes[0]) * MIN_IN_HOUR) + Number(hourAndMinutes[1]);
  return deltaTime;
}



function afterMidnight(hoursMinutes) {
  let deltaTime = getDeltaTime(hoursMinutes);
  if(deltaTime >= MIN_IN_DAY) {
    deltaTime = deltaTime - MIN_IN_DAY;
  }
  return deltaTime;

}

function beforeMidnight(hoursMinutes) {
  let deltaTime = MIN_IN_DAY - getDeltaTime(hoursMinutes);
  if(deltaTime >= MIN_IN_DAY) {
    deltaTime = deltaTime - MIN_IN_DAY;
  }
  return deltaTime;

}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);