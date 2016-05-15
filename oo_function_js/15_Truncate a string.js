/**
 * Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.slice()
 */

/**
 * 
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

 */




function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strSlice;
  if (num >= str.length){
  	return str;
  }
  else if (num >= 3){
    strSlice = str.slice(0, num-3);
    strSlice += "...";
    console.log(strSlice);
    return strSlice;   
  }
  else {
    strSlice = str.slice(0, num);
    strSlice += "...";
    return strSlice;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


truncateString("A-tisket a-tasket A green and yellow basket", 11);