/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

 */

function titleCase(str) {
	str = str.split(' ');
	console.log(str);
	var tempStr;
	for (var i = 0; i < str.length; i++){
		tempStr = str[i].split('');
		console.log(tempStr);
		tempStr[0].toUpperCase();
		console.log(tempStr);
	}
	console.log(str);
  return str;
}