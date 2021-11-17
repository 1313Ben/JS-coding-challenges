// Ex Oh
// Have the function ExOh(str) take the str parameter being passed and
// return the string true if there is an equal number of x's and o's,
// otherwise return the string false.Only these two letters will be entered in the string,
// no punctuation or numbers.For example: if str is "xooxxxxooxo" then the output should
// return false because there are 6 x's and 5 o's.

// Examples
// Input: "xooxxo"
// Output: true
// Input: "x"
// Output: false

function ExOh(str) {
  // code goes here  
  const arr = str.split('').sort(); 

  const counts = {};
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(Object.values(counts)[0] === Object.values(counts)[1]);
  return (Object.values(counts)[0] === Object.values(counts)[1]);

  // console.log(Object.is(counts));
  // let matches = [...new Set(Object.values(counts))]
  // return [...new Set(Object.values(counts))].length === 1 ? true : false
  // console.log(matches.length);
}

console.log(ExOh("xooxxo"));

// alternate I
function ExOh(str) {
  let exes = str.match(/x/g) || [];
  let oes  = str.match(/o/g) || [];

  return exes.length === oes.length;
}

// alternate II
function ExOh(str) { 

  let xArray = str.match(/x/g);
  let oArray = str.match(/o/g);
  if (!xArray || !oArray) {
      return false;
  }
  if (xArray.length === oArray.length) {
      return true;
  }
  return false; 
         
}