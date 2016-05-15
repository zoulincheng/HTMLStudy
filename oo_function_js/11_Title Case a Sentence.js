/**
 * Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()


function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

 */



function titleCase(str) {
  var lowStr = str.toLowerCase();
  var arrStr = lowStr.split(" ");
  var tmpStr;
  var postStr;
  var strLen = 0;

  var newStr = [];
  for (var i = 0; i < arrStr.length; i++){
  	strLen = arrStr[i].length;
  	tmpChar = arrStr[i].substring(0,1).toUpperCase();
	postString = arrStr[i].substring(1,strLen);
	tmpStr = tmpChar + postString;
	console.log(tmpStr);
	newStr[i] = tmpStr;
  }
  console.log(arrStr);
  console.log(lowStr);
  console.log(newStr);
  str = newStr.join(" ");
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
