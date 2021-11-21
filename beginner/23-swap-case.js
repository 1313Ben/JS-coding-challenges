// Swap Case
// Have the function SwapCase(str) take the str parameter and swap 
// the case of each character.
// For example: if str is "Hello World" the output should be hELLO wORLD.
// Let numbers and symbols stay the way they are.

// Examples
// Input: "Hello-LOL"
// Output: hELLO-lol
// Input: "Sup DUDE!!?"
// Output: sUP dude!!?

function SwapCase(str) { 

  // code goes here
  let lowerCaseIds = []
  let patt = /[a-z]/;
  let strSplitted = str.split('')
  strSplitted.forEach((element,index) => {
    if (patt.test(element)) {
      lowerCaseIds[index] = 1
    } else {
      lowerCaseIds[index] = 0
    }
  });

  lowerCaseIds.forEach((element,index) => {
    (element == 1) ? strSplitted[index] = strSplitted[index].toUpperCase() : strSplitted[index] = strSplitted[index].toLowerCase();
  });

  console.log(str);
  return strSplitted.join('');

}

console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));

// alternate I
function SwapCase(str) {
  
  return str.replace(/w/g, (ch) => {
    if (/[a-z]/.test(ch))
      return ch.toUpperCase();
    else
      return ch.toLowerCase();
  });
  
}

console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));

// alternate II
function SwapCase(str) { 

  // code goes here  
  return str.split('').map(letter => {
    if (letter === letter.toLowerCase()) return letter.toUpperCase();
    else if (letter === letter.toUpperCase()) return letter.toLowerCase();
    else return letter;
  }).join('');
}

console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));
   