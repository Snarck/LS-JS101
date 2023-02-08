Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

input: string.
output: boolean

- a block is two letters. 
  - One letter from each block can only be used once
  - using one of the letters removes the block from being usable.
- a valid word is a word that doesn't use a "word block" more than once per letter.
- We can ignore sensitivity. 

"BATCH"
uses: B:O N:A G:T C:P H:U
"BUTCH"
uses: B:O H:U G:T C:P and H:U again.

Data Structure and Algorithm:

I think a nested Array is the easiest to manipulate here. 
[[B, O], etc..]

We can loop through the string, for each letter, loop through the array.
if arr[0..1...2..].includes(value) {
  remove value
  push element to a new array.
  break. 
}

return checker.join("") === str;
