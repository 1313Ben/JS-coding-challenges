// Dash Insert
// Have the function DashInsert(str) insert dashes('-') between 
// each two odd numbers in str.For example:
// if str is 454793 the output should be 4547 - 9 - 3.
// Don't count zero as an odd number.

// Examples
// Input: 99946
// Output: 9-9-946
// Input: 56730
// Output: 567-30

function DashInsert(str) { 
  // code goes here
  // console.log(typeof (str));
  let numbersInarray = Array.from(str.toString()).map(Number);
  let allOddnumbersIndex = []
  numbersInarray.forEach((element,index) => {
    (element % 2 !== 0) ? allOddnumbersIndex[index] = 1 : allOddnumbersIndex[index] = 0;
  });

  let newString = [];
  // console.log(numbersInarray);
  // console.log(allOddnumbersIndex);
  // console.log((allOddnumbersIndex[2]) - (allOddnumbersIndex[1]));

  for (let i = 0; i < numbersInarray.length ; i++) {
    if (((allOddnumbersIndex[i]) + (allOddnumbersIndex[i + 1])) === 2) {
      newString.push(numbersInarray[i]);
      newString.push('-');
    } else {
      newString.push(numbersInarray[i]);
    }
  }
  return newString.join('');
}
   
// console.log(DashInsert(77993));
console.log(DashInsert(99946));

// alternate
function DashInsert(str) { 
  return str.toString().replace(/([13579])(?=[13579])/g, "$1-");
}

console.log(DashInsert(99946));