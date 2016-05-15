/**
 * Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object


function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

 */

function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatStr = [];
  if (num < 0)
    return "";
  for (var i = 0; i < num; i++){
    repeatStr[i] = str;
  }
  str = repeatStr.join("");
  console.log(str);
  return str;
}

repeatStringNumTimes("abc", 3);