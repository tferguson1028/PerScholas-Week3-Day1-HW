/*
  8. 
  Define a function, as a function expression, longestStringInArray 
  that takes an array of strings as an argument and returns the length of the longest string.
*/
  
/* Functions */
const longestStringInArray = function(stringArr)
{
  if(!Array.isArray(stringArr))
    return -1;
    
  // Any String will be at least 0 length, so if an array of non-Strings is entered and this is returned, the dev can see something is wrong.
  let max = -1; 
  for(string of stringArr)
    if(typeof string === 'string' && max < string.length)
      max = string.length;
  
  return max;  
}

/* Main */
// Expected Output: 16, -1, 0
console.log(longestStringInArray([
  "userper",
  "console.log(...)",
  "verintibint",
  "crumpet",
  "1212",
  1287451305871630513029570,
  undefined
]));

console.log(longestStringInArray([4, 6, 7, 121]));
console.log(longestStringInArray(["", undefined, null]));
