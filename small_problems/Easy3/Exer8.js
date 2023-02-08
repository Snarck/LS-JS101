function getGrade(num1, num2, num3) {
  let score = (num1 + num2 + num3) / 3;
  console.log(score);

  if(score >= 90) return "A";
  if(score >= 80) return "B";
  if(score >= 70) return "C";
  if(score >= 60) return "D"
  return "F";
}




console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"