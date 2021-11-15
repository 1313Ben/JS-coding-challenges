// Have the function LongestWord(sen) take the sen parameter being passed and return 
// the longest word in the string. If there are two or more words that are the same 
// length, return the first word from the string with that length. Ignore punctuation and 
// assume sen will not be empty. Words may also contain numbers, 
// for example "Hello world123 567"

function LongestWord(sen) { 
  // code goes here  
  let str = sen.replace(/[^a-zA-Z ]/g, " ");
  let words = str.split(" ");
  let maxLength = 0;
  let longestWord = "";
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord; 
}

console.log(LongestWord("The longest word"));


// alternate
function LongestWord(sen) { 

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  let arr = sen.match(/[a-z]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  let sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];
         
}
   