// Have the function FirstFactorial(num) take the num parameter being passed 
// and return the factorial of it. For example: if num = 4, then your program 
// should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be 
// between 1 and 18 and the input will always be an integer. 


function FirstFactorial(num) { 
  // code goes here
  let res = 1;
  do {
   res *= num
   num = num - 1
    } while (num > 0);  
    return res; 
}
console.log(FirstFactorial(3));

// alternate
function FirstFactorial(num) { 
    return (num === 1 ? 1 : num * FirstFactorial(num - 1));
}
console.log(FirstFactorial(3));
   