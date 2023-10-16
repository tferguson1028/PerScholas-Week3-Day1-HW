/* 
  9. 
  Define a function, as a function declaration, stringsLongerThan 
  that takes an array of strings and a number as arguments; 
  and returns an array of the strings that are longer than the number passed in.
  For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
*/

/* Functions */
function stringsLongerThan(stringArr, minLength)
{
  if(!Array.isArray(stringArr) || typeof minLength !== 'number')
    return [];
  
  let retArr = [];
  stringArr.forEach(string =>
  {
    if(typeof string === 'string' && string.length > minLength)
      retArr.push(string);
  });
  
  return retArr;
}

/* Main */
// Expected Output: [], ['hello', 'morning'], ['There', 'team']
console.log(stringsLongerThan([123, 123, 123], 1));
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
console.log(stringsLongerThan("There is no I in team".split(" "), 3));
