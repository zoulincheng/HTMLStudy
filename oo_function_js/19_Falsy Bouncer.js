/**
 * Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter()


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);

 */


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val) {
  	  if(Boolean(val)){
  	  	//console.log(val);
  	  	return val;
  	  }
  });
  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);


/*
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// filtered is [12, 130, 44]
*/

