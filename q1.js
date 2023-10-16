/* 
  1. 
  Define a function, as a function declaration, 
  maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
  If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/
function maxOfTwoNumbers(num1, num2)
{
  let number1 = Number(num1);
  let number2 = Number(num2);
  
  if(isNaN(number1) && isNaN(number2))
    return NaN;
    
  if(number1  === number2)
    return number1;
  else if ( number1 < number2)
    return number2;
  else
    return number1;
}

console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(1, "2"));
console.log(maxOfTwoNumbers(1, "two"));
console.log(maxOfTwoNumbers(1, "two2"));
console.log(maxOfTwoNumbers("one", "two"));
