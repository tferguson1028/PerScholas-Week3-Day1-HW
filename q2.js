/* 
  2.
  Define a function, as a function expression, maxOfThree
  that takes three numbers as arguments and returns the largest of them. 
  Again, the Math.max method is not allowed.
*/

/* Functions */
const maxOfThree = function(num1, num2, num3)
{
  let n1 = Number(num1);
  let n2 = Number(num2);
  let n3 = Number(num3);
  
  if(isNaN(n1) && isNaN(n2) && isNaN(n3))
    return NaN;
  
  if(n1 > n2 && n1 > n3) return n1;
  if(n2 > n1 && n2 > n3) return n2;
  if(n3 > n1 && n3 > n2) return n3;
  return n1; // Else they are all equal.
}

/* Main */
// Expected Output: 4 for each
console.log(maxOfThree(1, 3, 4));
console.log(maxOfThree(4, 3, 1));
console.log(maxOfThree(3, 4, 1));
console.log(maxOfThree(1, 4, 3));
console.log(maxOfThree(4, 4, 4));

