## PROBLEM ##

Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.


## INPUT: Array of Strings

## Output: Array of strings sorted from highest>lowest of adjacent consonates. 

 * Explicit
   - If two strings contain the same highest number of adjacent consonates they should retain their original order
   - Consonents are adjacentif:
      - they are next to each other in the same word
      - seperated by space between adjacent words.

   * Question
   - What type of consonant are they asking for? How do you define that?

 * Implicit
  - arrays contain a series of 4 words.  
  - Strings are all lower-case. 
  - A consonate are letters that aren't A E I O U
  - 

## Test cases ## 

'aa, baa, ccaa, dddaa' -> 'dddaa', 'ccaa', 'aa', 'baa'
'can can', 'toucan', 'batman', 'salt pan' -> salt pan, can can, batman, toucan
bar, car, far, jar -> bar, car, far, jar.
day, week, month, year -> month, day, week, year. 



## DATA STRUCTURE ##

- Need to find the largest substring of consonants. 
- Spaces don't matter
- Need to return the words in an array, highest amount of consonants to lowest.
- They need to keep their place in their existing array if they contain the same. 
- can use vowels (A E I O U) to split strings into substrings. 
- Need keep the value whole to return in an array, so an intermediary object might be neccessary to track the weight of consonants. 

cancan, toucan, batman, saltpan
nc         0       tm      ltp => saltpan cancan, batman, toucan. 

aa, baa, ccaa, dddaa
"" b" "cc" "ddd"
^ is an issue.

- An object to store highest consonate stored in each word that we can manipulate using entries and from entries would help fidelity. 


## ALGORITHM ##
2. Use a helper function to compress each string into an array of consonates
  - Convert a string into an array of strings.
  - Remove every space and vowel.
3. - Create a function to store the amount of the largest amount of consonates in an object using the key as the name of the object and the amount as the value. 
  - can use a helper function to find the length of the highest consonate.
    - sort through passed array, highest length to lowest length.
  - Value can't be any less than 1.

    "tou can"
    "toucan"
    "t c n"
    - find biggest consonate, store in nested array. 
    "t c n"
    { tou can: 1 }
    "aa"
    ""
    { aa : 1 } 

4. convert object into an iterable array and sort the array by highest value to lowest. 
5. Return as an array of only strings by removing the first index of every word. 


  
