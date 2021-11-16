// Have the function SimpleSymbols(str) take the str parameter being passed and 
// determine if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several characters 
// between them(ie. ++d +=== +c++ == a) and for the string to be true each letter must be 
// surrounded by a + symbol.So the string to the left would be false.
// The string will not be empty and will have at least one letter.

// Examples
// Input: "+d+=3=+s+"
// Output: true
// Input: "f++d+"
// Output: false

function SimpleSymbols(str) { 

  //console.log(str.match(/\+[a-zA-Z]\+/g));
  const matchOne = str.match(/\+[a-zA-Z]\+/g) // checks for +a+
  let matchOneUnique  = [...new Set(matchOne)] // removing duplicates of matchOne in case +a+ many times appears
  console.log(matchOneUnique);

  //console.log(str.match(/[a-zA-Z][\+\=]/g)); // 
  const matchTwo = str.match(/[a-zA-Z][\+\=]/g) // checks for a+ or a=
  let matchTwoUnique  = [...new Set(matchTwo)] // removing duplicates of matchTwo in case a+ two times appears
  console.log(matchTwoUnique);

  if (matchOne === null) {
    return false;
  }

  if (matchOneUnique.length === matchTwoUnique.length) {
    return true;
  } else {
    return false;
  } 
}

console.log(SimpleSymbols('+a+a+'))


// alternate

function SimpleSymbols(str) {
  let reWrongSequence = /([^+]|^)[a-z]|[a-z]([^+]|$)/i;
  return !reWrongSequence.test(str);
}

