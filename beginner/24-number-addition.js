// Number Addition
// Have the function NumberAddition(str) take the str parameter,
// search for all the numbers in the string, add them together,
// then return that final number.For example: if str is "88Hello 3World!" 
// the output should be 91. You will have to differentiate 
// between single digit numbers and multiple digit numbers like in
// the example above.
// So "55Hello" and "5Hello 5" should return 
// two different answers.Each string will contain at least one letter or symbol.

// Examples
// Input: "75Number9"
// Output: 84
// Input: "10 2One Number*1*"
// Output: 13

function NumberAddition(str) { 

  // code goes here 
  //let regexp = /d?[^a-zA-Z]/gA;

  let strSplitted = str.split('');
 // console.log(strSplitted);
  let numBuilder = [];
  let numcollector = '';

  for (let index = 0; index < strSplitted.length; index++) {
    if (parseInt(strSplitted[index]) >= 0){
      numcollector += strSplitted[index];
    } else {
      if (numcollector !== '') {
        numBuilder.push(numcollector);
        numcollector = '';
      }
    }
  }

  (numcollector !== '') ? numBuilder.push(numcollector) : '';
  
  console.log(numBuilder);

  let sum = 0
  numBuilder.forEach(element => {
    sum += parseInt(element);
  })

  return sum;
}

console.log(NumberAddition("88Hello 3World!"));


// alternate I
function NumberAddition(str) { 

  // use the JavaScript match function which
  // tries to find all matching patterns in the string
  // and it returns an array of all matches found
  // e.g. "75Number9" returns [75, 9] 
  // or set to 0 if no numbers are found
  let nums = str.match(/[0-9]+/gi) || [0]; //  let nums = str.match(/\d+/g);
  
  // use the JavaScript reduce functions which calls a
  // function on each value in the array and returns
  // a final single value
  return nums.reduce((previousVal, currentVal) => {
    return parseInt(previousVal) + parseInt(currentVal);
  });
         
}


console.log(NumberAddition("75Number9"));

// alternate II
// function NumberAddition(str) { 
//     var nums = str.split(/\D+/);
//     var sum = 0;
    
//     for (var i = 0; i < nums.length; i++){
//         sum += (parseInt(nums[i]) || 0);
//     }
//     return sum; 
// }
  