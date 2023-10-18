/* 
  7. 
  Define a function, as a function declaration, reverseString 
  that takes a string, reverses the characters, and returns it.
  For example, reverseString('rockstar'); would return the string "ratskcor".
*/

// function reverseString(string)
// {
//   if(typeof string === 'undefined' || typeof string === 'null')
//     return null;
  
//   string = String(string);
//   let charArr = String(string); //Copying the string for safety. Works without doing this.
//   for(char of charArr)
//   {
//     console.log(string);
//     string = String(char + string).substring(0, string.length);
//   }
  
//   return string;
// }

function reverseString(string)
{
  if(typeof string === 'undefined' || typeof string === 'null')
    return null;
  
  let stringArr = String(string).split(""); // Convert string to arr of separated chars.
  string = "";
  while(stringArr.length > 0)
    string += stringArr.pop();
  return string;
}

console.log(reverseString("dog"));
console.log(reverseString(127));
console.log(reverseString(127.2));
console.log(reverseString(undefined));

