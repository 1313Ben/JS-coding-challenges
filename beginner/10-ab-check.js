// AB Check
// Have the function ABCheck(str) take the str parameter being passed and
// return the string true if the characters a and b are separated by exactly 3 places
// anywhere in the string at least once
//   (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
// Otherwise return the string false.

// Examples
// Input: "after badly"
// Output: false
// Input: "Laura sobs"
// Output: true

function ABCheck(str) {
  //let strWithoutSpace = str.split(' ').join(''); // removes space between words
  let firstIndexOfA = str.indexOf("a");
  let lastIndexOfA = str.lastIndexOf("a");
  console.log(firstIndexOfA);
  console.log(lastIndexOfA);
  let firstIndexOfB = str.indexOf("b");
  let lastIndexOfB = str.lastIndexOf("b");
  console.log(firstIndexOfB);
  console.log(lastIndexOfB);

  if (lastIndexOfA < 0 || lastIndexOfB < 0) {
    return false;
  }

  if ((firstIndexOfB === firstIndexOfA + 4) || (lastIndexOfB === lastIndexOfA + 4)) {
    return true;
  }
  
  if ((firstIndexOfA === firstIndexOfB + 4) || (lastIndexOfA === lastIndexOfB + 4)) {
    return true;
  }

  return false;
}

console.log(ABCheck("aaaaddddd"));

// alternate I
function ABCheck(str) {
  return /a...b|b...a/.test(str); // a any any any b or b any any any a 
}
   
// alternate II
function ABCheck(str) { 

  var regex = /a.{3}b/g;
  
  if (str.match(regex)) {
      return true;
  }
  return false; 
         
}