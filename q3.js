/* 
  3. 
  Define a function, as a function declaration, isCharAVowel 
  that takes a character as an argument and 
  returns true if it is a vowel, false otherwise.
*/

/* Functions */
function isCharAVowel(character)
{
  if(character.length > 1)
    return false;
    
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  // if(vowels.findIndex(character))
  //   return true;
    
  for(vowel of vowels)
    if(String(character).toLowerCase() === vowel)
      return true;
  return false;
}

/* Main */
// Expected Output: false, false, true, true.
console.log(isCharAVowel("bug"));
console.log(isCharAVowel("b"));
console.log(isCharAVowel("u"));
console.log(isCharAVowel("U"));
