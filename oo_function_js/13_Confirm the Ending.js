
/**
 * Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

 */



function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLen = target.length;
  var subSting = str.substr(-targetLen);
  console.log(subSting);
  if (str.substr(-targetLen) == target){
  	console.log("target true");
    return true;
  }
  console.log("target false");
  return false;
}

confirmEnding("Bastian", "n");

