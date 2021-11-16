// Have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order(ie.hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

// Examples
// Input: "coderbyte"
// Output: bcdeeorty
// Input: "hooplah"
// Output: ahhloop
function AlphabetSoup(str) { 
  return str.split('').sort().join('');
  // code goes here  
  return str; 
}

console.log(AlphabetSoup("hooplah"));