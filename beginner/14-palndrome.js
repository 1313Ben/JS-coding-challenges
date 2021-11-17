// Palindrome
// Have the function Palindrome(str) take the str parameter 
// being passed and return the string true if the parameter is a palindrome,
// (the string is the same forward as it is backward) otherwise return the string false.
// For example: "racecar" is also "racecar" backwards.
// Punctuation and numbers will not be part of the string.

// Examples
// Input: "never odd or even"
// Output: true
// Input: "eye"
// Output: true

function Palindrome(str) { 

  // code goes here
  let strNospace = str.replace(/ /g, '').split(''); // removes all spaces
  //console.log(strNospace);
  let strReverse = str.replace(/ /g, '').split('').reverse();
  //console.log(strReverse);
  
  let res = false;
  for (let index = 0; index < strNospace.length; index++) {
    if (strNospace[index] == strReverse[index]) {
      res = true;
    } else {
      return res = false;
    }
  }
  return res;
}

// alternate I
function Palindrome(str) {

  // code goes here  
  let newStr = str.split(" ").join("").toLowerCase();
  console.log(str);

  // we wrote this reverse code in a previous solution 
  let rev = newStr.split('').reverse().join(''); // join is like flatten in ruby. tranform array to a single string
  console.log(rev);

  // now it's very easy to check if a string is a palindrome
  return str === rev;

}

// alternate II
function Palindrome(str) {
  let newStr = str.replace(/[' ']/g, '');
  let rev = newStr.split('').reverse().join('');
  return rev === newStr;
}
console.log(Palindrome("eye"));
