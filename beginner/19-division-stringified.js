// Division Stringified
// Have the function DivisionStringified(num1, num2) take both parameters being passed,
//   divide num1 by num2, and return the result as a string with properly formatted commas.
//   If an answer is only 3 digits long, return the number with no commas(ie. 2 / 3 should output "1").
//   For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
// Examples
// Input: 5 & num2 = 2
// Output: 3
// Input: 6874 & num2 = 67
// Output: 103

function DivisionStringified(num1,num2) { 
  // code goes here 
  //console.log((num1/num2).toString()) ;
  let res = Math.round(num1 / num2).toString(); 
  return res.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

console.log(DivisionStringified(123456789, 10000));

// alternate
function DivisionStringified(num1,num2) { 
  let result = Math.round(num1/num2);
  
  result = result.toLocaleString('en');
  
  return result;
}