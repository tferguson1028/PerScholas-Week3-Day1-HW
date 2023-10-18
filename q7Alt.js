/* 
  7. 
  Define a function, as a function declaration, reverseString 
  that takes a string, reverses the characters, and returns it.
  For example, reverseString('rockstar'); would return the string "ratskcor".
*/

/* 
  I wanted to make my answer even shorter and experiment with what could go in the for-loop. 
  This mess is the result.
*/
function unorthodoxReverseString(string)
{
  if(typeof string === 'undefined' || typeof string === 'null')
    return null;
  
  let stringArr = String(string).split("");
  
  /*
    Initialize: stringArr.pop() overwrites the string with its last element
    Condition:  Check if stringArr is empty. I wanted to try .at(-1) so I did it an unsafe way
    Increment:  Concat-ing the string and removing the last element with stringArr.pop()
  */
  // for(string = stringArr.pop(); typeof stringArr.at(-1) !== 'undefined'; string += stringArr.pop());
  for(string = stringArr.pop(); stringArr.length > 0; string += stringArr.pop()); // In hindsight this is smarter.
  return string;
}

function cursedReverseString(string)
{
  // I went too far
  for(let i = 0; i < string.length; string = string.substring(0, i) + (string.split("")).pop() + string.substring(i, string.length-1), i++);
  return string;
}

console.log(unorthodoxReverseString("This should not work but it does!"));
console.log(cursedReverseString("I'll stop now..."));
