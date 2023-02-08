const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(number) {
return (calculateTime(number));
}

function calculateTime(number) {
  let hour = Math.floor(number / MINUTES_IN_HOUR);
  let minute = Math.floor(number % MINUTES_IN_HOUR);

  if (Math.sign(number) === -1) {
    if (hour < -HOURS_IN_DAY && hour !== 0) {
      hour = (hour % HOURS_IN_DAY) + HOURS_IN_DAY;
      minute = (minute % MINUTES_IN_HOUR) + MINUTES_IN_HOUR;
    } else if (hour !== 0) {
        hour = hour + HOURS_IN_DAY;
        minute = minute + MINUTES_IN_HOUR;
    }
  } else if (hour >= HOURS_IN_DAY && hour !== 0)  {
        hour = hour % 24;
  }
  
  return formatTime(hour, minute);

}

function formatTime (hour, minute) {
  // HH:MM
  let hhmm = '';
  hhmm += String(hour).padStart(2, "0") + ":";
  hhmm += String(minute).padStart(2, "0");
  return hhmm;

}



console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


/*

The time of day is number of minutes before or after midnight.
Midnight = 00:00
Midnight -1 minute = 
23:59

The only thing that matters is you have a representation of 60
from 0-59

Lets say that everything starts at midnight
take a simple scenario: pass me 60
1 am (Exactly)
I pass 440
every hour progressing is 60
number divided by 60
number % 60 = minute
if minute is negative just subtract hour from 24:00
63 % 60 = 3

absolute value of 63 3
subtract from 24





hours minute equation =
hours = number / 60
hourFloored = Math.floored(hours);
minute = (hours - hourFloored) * 60
var minutesFloored = math.round(minutes);

hourfloored:minuteFloored


*/