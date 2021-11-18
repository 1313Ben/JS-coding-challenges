// Second GreatLow
// Have the function SecondGreatLow(arr) take the array of numbers stored in arr 
// and return the second lowest and second greatest numbers, respectively, separated by a space.
// For example: if arr contains[7, 7, 12, 98, 106] the output should be 12 98. 
// The array will not be empty and will contain at least 2 numbers.It can get tricky if 
// there's just two numbers!

// Examples
// Input: [1, 42, 42, 180]
// Output: 42 42
// Input: [4, 90]
// Output: 90 4

function SecondGreatLow(arr) { 

  // code goes here  
  //console.log(Math.max(...arr));
  let sortedArray = arr.sort(((a, b) => a - b));

  if (arr.length <= 2) {
    if (arr[0] == arr[1]) {
      return arr[0] + " " + arr[1];
    }
     return arr[sortedArray.indexOf(Math.max(...arr))]
    + " " +
       arr[sortedArray.indexOf(Math.max(...arr)) - 1];
    
  } else {
    let flatArr = [...new Set(sortedArray )] // remove duplicates

    return flatArr[1]
      + " " +
    flatArr[flatArr.indexOf(Math.max(...flatArr)) - 1];
  }
}

console.log(SecondGreatLow([7, 7, 90, 1000003]))


// alternate

function SecondGreatLow(arr) { 

  // first we create a unique array by using the filter function
  // we check to see if the index of the current element in the array 
  // is equal to the first index of the element, if so then add the
  // element to the new array
  let unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });

  // sort the unique array in ascending order
  let sorted = unique.sort(function(a, b) {
    return a - b;
  });

  // return the second smallest and largest elements
  // but also check to make sure there is more than 1
  // element in the array
  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
         
}
 