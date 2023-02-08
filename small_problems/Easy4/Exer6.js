function isPalindromicNumber (number) {
 let cimordnilap = Number(String(number).split('').reverse().join(''));
 console.log(`${number} + ${cimordnilap}`);
 console.log(cimordnilap === number);

}



isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true