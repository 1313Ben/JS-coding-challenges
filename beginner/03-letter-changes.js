/* 
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 */

function LetterChanges(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let vowels = ["a", "e", "i", "o", "u"];
  let newletter = "";

  // code goes here
  [...str].forEach((letter) => {
  // console.log(letter)
    let indexLetter = alphabet.indexOf(letter)
  // console.log(indexLetter)

    if (indexLetter === 25) {
      newletter += (alphabet[0]);
    } else if (indexLetter < 25 && indexLetter >= 0) {
      newletter += alphabet[indexLetter + 1];
    } else {
      newletter += letter;
    }
  });

  // vowels in uppercase
  let res = "";
  [...newletter].map((letter) => {
    vowels.includes(letter) ? res += letter.toUpperCase() : res += letter;
  });

  return res;
}

console.log(LetterChanges("zd1*"));

// alternate

function LetterChanges(str) { 

  let array = str.split('');
  array = array.map((letter) => {
     let newLetter = String.fromCharCode(letter.charCodeAt(0)+1);
     
     if (!newLetter.match(/^[a-zA-Z]+$/)) {
         return letter;
     }
     else if (newLetter == 'a' || newLetter == 'e' || newLetter == 'i' || newLetter == 'o' || newLetter == 'u') {
         return newLetter.toUpperCase();
     }
     else {
         return newLetter.toLowerCase();
     }
  });
  
  return array.join(''); 
         
}
  