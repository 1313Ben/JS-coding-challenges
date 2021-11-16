// Have the function CheckNums(num1, num2) take both parameters being passed and
// return the string true if num2 is greater than num1,otherwise return the string false.
// If the parameter values are equal to each other then return the string - 1.

function CheckNums(num1,num2) { 
  // code goes here  
  if (num2 > num1) {
    return true;
  } else if (num2 === num1) {
    return -1;
  } else {
    return false;
  }
}

console.log(CheckNums(2, 3));

// alternate
function CheckNums(num1,num2) { 
  // code goes here
  return num2 == num1 ? -1 : num2 > num1;            
}