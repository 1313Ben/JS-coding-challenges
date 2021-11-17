// Arith Geo
// Have the function ArithGeo(arr) take the array of numbers stored in arr 
// and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
// or return "Geometric" if it follows a geometric pattern.
// If the sequence doesn't follow either pattern return -1. 
// An arithmetic sequence is one where the difference between each of the numbers is consistent,
// where as in a geometric sequence, each term after the first is multiplied by some constant or 
// common ratio.Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
// Negative numbers may be entered as parameters, 0 will not be entered,
// and no array will contain all the same elements.

// Examples
// Input: [5,10,15]
// Output: Arithmetic
// Input: [2,4,16,24]
// Output: -1

function ArithGeo(arr) { 

  // code goes here 
  let arith = "";
  let geo = "";
  let diff = arr[1] - arr[0];
  let notGeo = false;

  for (let index = 0; index < arr.length-1; index++) {
    if ((arr[index + 1] % arr[index] === 0) && !notGeo ) {
      console.log(arr[index + 1] % arr[index]);
      geo = "Geometric"
    } else if (arr[index + 1] - arr[index] === diff) {
      arith = "Arithmetic";
      geo = "";
      notGeo = true;
    } else {
      return -1;
    }
  }

  if (geo !== "") {
    return geo;
  }

  if (arith !== "") {
    return arith;
  }

}

console.log(ArithGeo([1,2,3,4,5,10,20]))