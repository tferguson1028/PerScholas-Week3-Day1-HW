/* 
  6. 
  Define a function, as a function expression, numArgs 
  that returns the number of arguments passed to the function when called.
*/

/* Functions */
const numArgs = function()
{
  return arguments.length;
}

/* Main */
// Expected Output: 5, 3, 1, 
console.log(numArgs(1,2,3,4,5));
console.log(numArgs(1,2,3));
console.log(numArgs(1));
console.log(numArgs());
