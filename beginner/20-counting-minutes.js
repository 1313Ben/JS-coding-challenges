// Counting Minutes I
// Have the function CountingMinutesI(str) take the str parameter being passed which will be 
// two times(each properly formatted with a colon and am or pm) separated by a hyphen 
// and return the total number of minutes between the two times.
// The time will be in a 12 hour clock format.
// For example: if str is 9: 00am - 10: 00am then the output should be 60. 
// If str is 1: 00pm - 11: 00am the output should be 1320.

// Examples
// Input: "12:30pm-12:00am"
// Output: 690
// Input: "1:23am-1:08am"
// Output: 1425

function CountingMinutesI(str) { 

  // code goes here  
  // let res = str.replace(/[^0-9]/g, '');
  // console.log(parseInt(res));

  let amOrPm = [];
  let indexOfColon = []
  str.split('').forEach((element, index) => {
    if (element === "a" || element === "p") {
      amOrPm.push(element);
    }

    if (element === ":") {
      indexOfColon.push(index);
    }

  });
  console.log(amOrPm);
  console.log(indexOfColon);

  let sliceOneHour = parseInt(str.slice(0, indexOfColon[0]));
  console.log(sliceOneHour);
  let sliceOneMinutes = parseInt(str.slice(indexOfColon[0]+1, indexOfColon[0] + 3));
  console.log(sliceOneMinutes);
  let sliceTwoHour =parseInt(str.slice(str.indexOf('-')+1,indexOfColon[1]));
  console.log(sliceTwoHour);
  let sliceTwoMinutes = parseInt(str.slice(indexOfColon[1] + 1, indexOfColon[1] + 3));
  console.log(sliceTwoMinutes);

  // calculates Minutes 
  let minutes = 0;
  if ((amOrPm[0] === 'p' && amOrPm[1] === 'p') || (amOrPm[0] === 'a' && amOrPm[1] === 'a')) {
    if (sliceOneHour > sliceTwoHour) {
      return minutes = ((24 - (sliceOneHour - sliceTwoHour)) * 60) - sliceOneMinutes + sliceTwoMinutes;
    } else if (sliceOneMinutes > sliceTwoMinutes) {
      return minutes = (((24 - sliceOneHour )* 60 )- sliceOneMinutes) + ((sliceTwoHour * 60) + sliceTwoMinutes);
    } else {
      return minutes = ((sliceTwoHour - sliceOneHour) * 60) - sliceOneMinutes + sliceTwoMinutes;
    }
  }
  
  if (amOrPm[0] === 'a' && amOrPm[1] === 'p') {
    return minutes = (((12 - sliceOneHour )* 60 )- sliceOneMinutes) + ((sliceTwoHour * 60) + sliceTwoMinutes);
  } else {
    return minutes = (((12 - sliceOneHour )* 60 )- sliceOneMinutes) + ((sliceTwoHour* 60) + sliceTwoMinutes);
  }

}


//console.log(CountingMinutesI("1:23am-1:08am"));
console.log(CountingMinutesI("11:00am-2:10pm"));
//console.log(CountingMinutesI("1:00pm-11:00am"));

