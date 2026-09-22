function isPalindrome(word) { 
let reversedWord = word.split("").reverse().join(""); 
return word === reversedWord; 
} 
let word = "madam"; 
let result = isPalindrome(word); 
console.log("Word:", word); 
console.log("Is Palindrome:", result); 