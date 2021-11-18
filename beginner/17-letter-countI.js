// Letter Count I
// Have the function LetterCountI(str) take the str parameter being passed and return the 
// first word with the greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest because 
// it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
// If there are no words with repeating letters return -1. 
// Words will be separated by spaces.

// Examples
// Input: "Hello apple pie"
// Output: Hello
// Input: "No words"
// Output: -1


function LetterCountI(str) { 
  // code goes here  
  // splitting each words
  let strSplit = str.split(' '); 
  // helper array to store of double letters amount 
  let counterArray = [];
  for (let index = 0; index < strSplit.length; index++) {
    let counter = 0;
    console.log([...new Set(strSplit[index])].length);
    // search for words which contains double letters
    if (strSplit[index].length !== [...new Set(strSplit[index])].length) {
      ++counter;
      counterArray[index] = counter;
    } else {
      counterArray[index] = 0;
    }
  }
    return Math.max(...counterArray) == 0 ? -1 : strSplit[counterArray.indexOf(Math.max(...counterArray))]
}

console.log(LetterCountI("the dog and cat"))


// alternate
function LetterCountI(str) { 
    str=str.split(" ");
    var temp="";
    var counts=[];
    for(var i=0; i<str.length; i++){
        temp= "00" + str[i];
        counts.push(temp.split("").sort().join("").match(/(\w)\1+/gi).length);
    }
  // code goes here  
  return Math.max(...counts)>1?str[counts.indexOf(Math.max(...counts))]:-1; 
}


// function LetterCountI(str) { 

//   // splitting each words
//   let strSplit = str.split(' '); 
//   // console.log(strSplit.length);

//   // helper array to store of double letters amount 
//   let counterArray = [];
//   // code goes here  
//   for (let index = 0; index < strSplit.length; index++) {
//       let counter = 0;
//     console.log([...new Set(strSplit[index])].length);
//     // looping through each word

//       if (strSplit[index].length !== [...new Set(strSplit[index])].length) {
//         ++counter;
//         counterArray[index] = counter;
//       } else {
//         counterArray[index] = 0;
//       }
//     // for (let i = 0; i < strSplit[index].length - 1; i++) {
//     //   // comparing each letters
//     //   if (strSplit[index][i] == strSplit[index][i + 1]) {
//     //     ++ counter;
//     //     counterArray[index] = counter;
//     //  }
//   }
//     // helper to check an empty array
//     // const empty = arr => arr.length == 0 ? true : false;
//     //return empty(counterArray) ? -1 : strSplit[counterArray.indexOf(Math.max(...counterArray))];
//     return strSplit[counterArray.indexOf(Math.max(...counterArray))]
// }