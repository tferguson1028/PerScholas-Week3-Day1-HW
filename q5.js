/* 
  5. 
  Define a function, as a function declaration, multiplyArray 
  that takes an array of numbers and returns the product those numbers.
  For example, multiplyArray([2, 4, 5]);would return 40.
*/

/* Functions */
function multiplyArray(arr)
{
  if(!Array.isArray(arr))
    return null;
    
  let retVal = 1;
  for(e of arr)
  {
    if(!isNaN(e))
      retVal *= Number(e);
  }
  
  return retVal;
}

/* Main */
console.log(multiplyArray(2, 4, 5));
console.log(multiplyArray([2, 4, 5]));
