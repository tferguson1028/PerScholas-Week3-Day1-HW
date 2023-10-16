/* 
  4. 
  Define a function, as a function expression, sumArray 
  that takes an array of numbers and returns the sum of those numbers. 
  For example, sumArray([2, 4, 5]); would return 11.
*/

/* Functions */
const sumArray = function(arr)
{
  if(!Array.isArray(arr))
    return null;
    
  let retVal = 0;
  for(e of arr)
  {
    if(!isNaN(e))
      retVal += Number(e);
  }
  
  return retVal;
}

/* Main */
console.log(sumArray(2, 4, 5));
console.log(sumArray([2, 4, 5]));

