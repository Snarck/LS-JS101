function dms(degree) {
  let d = Math.floor(degree);
  let m = ((degree - Math.floor(degree)) * 60);
  let s = ((m - Math.floor(m)) * 60);
  m = Math.trunc(m);
  s = Math.trunc(s);
  console.log(formatDMS(d + "", m + "", s + ""));
}

function formatDMS(d, m, s) {
  m = m.padStart(2, '0');
  s = s.padStart(2, '0');
  return `${d}˚${m}'${s}"`
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
/*

one degree = 60 minutes
one minute = 60 seconds
76.73 = 
.73 * 60 = 43.8
43 + (0.8 * 60) = 48
76.43.48

degree = 76
minute = .73 * 60 = 43 | .8
second = .8 * 60 = 48







*/
