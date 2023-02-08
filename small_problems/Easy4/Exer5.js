function isRealPalindrome(palindrome){
  palindrome = palindrome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(palindrome);
  let emordnilap = palindrome.split('').reverse().join('');
  console.log(emordnilap);
  return console.log(palindrome === emordnilap);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false