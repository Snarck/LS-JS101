let words = ['go', 'ahead', 'and', 'jump'];

console.log(words.sort((a, b) => {
  return a.length - b.length;
}))