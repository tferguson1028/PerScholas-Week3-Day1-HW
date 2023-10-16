/* 
  1. 
  Define a function, as a function declaration, maxOfTwoNumbers 
  that takes two numbers as arguments and returns the largest of them. 
  If they are the same, return that number. 
  Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/

/* Functions */
function maxOfTwoNumbers(num1, num2)
{
  let n1 = Number(num1);
  let n2 = Number(num2);
  
  if(isNaN(n1) && isNaN(n2))
    return NaN;
    
  if( n2 > n1)  return n2;
  else return n1; // Else n1 >= n2. Solves 2 cases.
}

/* Main */
// Expected Output: 2, 2, 1, 1, NaN
console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(1, "2"));
console.log(maxOfTwoNumbers(1, "two"));
console.log(maxOfTwoNumbers(1, "two2"));
console.log(maxOfTwoNumbers("one", "two"));

