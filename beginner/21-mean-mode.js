// Mean Mode
// Have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0 if they don't 
// equal each other(ie. [5, 3, 3, 3, 1] should return 1 because the mode(3) equals 
// the mean(3)). The array will not be empty, will only contain positive integers,
//   and will not contain more than one mode.

// Examples
// Input: [1, 2, 3]
// Output: 0
// Input: [4, 4, 4, 6, 2]
// Output: 1

function MeanMode(arr) {

  // code goes here
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  let meanPos = parseInt(arr.length / 2);
  console.log(meanPos);
  console.log(sum/arr.length)
  return (sum/arr.length) === arr[meanPos - 1] ? 1 : 0; 
}

console.log(MeanMode([4, 4, 4, 6, 2]));
//console.log(MeanMode([1,2,3]));
// console.log(MeanMode([10, 10, 10, 19, 1]));

