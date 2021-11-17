// Vowel Count
// Have the function VowelCount(str) 
// take the str string parameter being passed and return the number of 
// vowels the string contains(ie. "All cows eat grass and moo" would return 8).
// Do not count y as a vowel for this challenge.

// Examples
// Input: "hello"
// Output: 2
// Input: "coderbyte"
// Output: 3

function VowelCount(str) { 

  // code goes here  
  return (str.match(/[aeiou]/g) === null) ? 0 : str.match(/[aeiou]/g).length ; 

}

console.log(VowelCount("0000"));

// alternate
function VowelCount(str) { 
  return str.match(/[aeiou]/ig)!==null ? str.match(/[aeiou]/ig).length:0; 
}
