function isPalindrome(palindrome){
  let emordnilap = palindrome.split('').reverse().join('');
  return console.log(palindrome === emordnilap);
}



isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true