// Array Addition I
// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return 
// the string true if any combination of numbers in the array(excluding the largest number) 
// can be added up to equal the largest number in the array, otherwise return the string false.
// For example: if arr contains[4, 6, 23, 10, 1, 3] the output should return true 
// because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same
// elements, and may contain negative numbers.

// Examples
// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true

function ArrayAdditionI(arr) {

  // code goes here 
  // console.log(arr.reduce((a, b) => a + b, 0)); // sum all elements start from index 0
  // * alternate for sum elements in an array // const sum = arr => arr.reduce((a, b) => a + b, 0);
  // console.log(Math.max(...arr)); // find the max
  return (arr.reduce((a, b) => a + b, 0) - Math.max(...arr) >= Math.max(...arr)) 

}

console.log(ArrayAdditionI([31,2,90,50,7]));