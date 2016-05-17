/*
Returning Boolean Values from Functions





You may recall from Comparison with the Equality Operator ? that all comparison operators return a boolean true or false value.

A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

Since === returns true or false, we can simply return the result of the comparison:
function isEqual(a,b) {
  return a === b;
}

Instructions

Fix the function isLess to remove the if/else statements.

*/


function isLess(a, b) {
  // Fix this code
  return a<b;
}

// Change these values to test
isLess(10, 15);

