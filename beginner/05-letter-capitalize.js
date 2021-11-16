// Letter Capitalize
// Have the function LetterCapitalize(str) take the str parameter being passed and 
// capitalize the first letter of each word. Words will be separated by only one space.
// Examples
// Input: "hello world"
// Output: Hello World
// Input: "i ran there"
// Output: I Ran There

function LetterCapitalize(str) { 
  // code goes here
  let words = str.split(" ");
  let res = [];
  [...words].forEach((word) => {
    res.push(word[0].toUpperCase() + word.slice(1));
  });
  
  return res.join(" ");
}

console.log(LetterCapitalize("hello world"));

// alternate 1
function LetterCapitalize(str) {
  return str.replace(/bw/g, ch => ch.toUpperCase());
}

// alternate 2
function LetterCapitalize(str) { 
  return str.split(' ').map(item => item[0].toUpperCase().concat(item.slice(1))).join(' ');
}