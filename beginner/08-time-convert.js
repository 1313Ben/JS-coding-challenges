// Have the function TimeConvert(num) 
// take the num parameter being passed and return the number of hours and 
// minutes the parameter converts to(ie.if num = 63 then the output should be 1: 3).
// Separate the number of hours and minutes with a colon.

// Examples
// Input: 126
// Output: 2:6
// Input: 45
// Output: 0:45

function TimeConvert(num) { 

  // code goes here
  let hours = parseInt(num / 60);
  let minutes = num % 60;

  return `${hours}:${minutes}`;

}

console.log(TimeConvert(45));

// alternate I
function TimeConvert(num) { 

  // code goes here  
  return Math.floor(num / 60) + ':' + (num % 60);
         
}

// alternate II
function TimeConvert(num) { 

  // code goes here  
  if (num < 60) {
      return "0:"+num;
  } else {
      let hour = Math.floor(num / 60);
      let minutes = num % 60;
      return hour + ':' + minutes;
  }
  
}
  