Tasks

You are provided with the problem description above. Your tasks for this step are:

    To make notes of your mental model for the problem, including explicit and implicit rules
    Write a list of questions for things that aren't clear about the problem from the description provided





Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Input:  Array of Strings
output: Array where Strings are sorted highest number of adjacent consonates to lowest. 

Explicit:
 - Consonates are every letter except for:      A E I O U
- Consonates are considered adjacent if they are next to each other in the same word, white space doesn't count.
- If two strings contain the same amount of consonants, you keep their original order.

Implicit:  The arrays always contain at least one string. 
In order to be "adjacent" there has to be at least two non-consonants next to each other.


Data Structure:
Let's create an array that stores the values for sorting: 
['aa', 'baa', 'ccaa', 'dddaa']
[0, 0, 2, 3]
We can use that for the sake of sorting the original array and mutate in place.

## algorithm
parameter "array"
init array "sorter" []
init array "invalidCharacters" ["a", "e", "i", "o", "u", undefined]
Including undefined let's us spot that edgecase. 

for each element in array

counter = 0;
"aa", "baa", ccaa, dddaa.

compare character to character behind it or ahead of it, if either are true, increment counter by one.
When done, push and reset counter. 

Sort and return original array based on sorter array. 



array.sort(function(a, b) {
    let aIndex = array.indexOf(a);
    let bIndex = array.indexOf(b);
    return sorter[bIndex] - sorter[aIndex];
  });
