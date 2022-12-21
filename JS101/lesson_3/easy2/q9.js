// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character
// wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
let trim = Math.floor((40 - title.length) / 2);

let paddedTitle = title.padStart(trim + title.length);
console.log(title.padStart(trim + title.length));
console.log(paddedTitle);
console.log(paddedTitle.length)