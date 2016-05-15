/**
 * Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.



function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

 */


function findLongestWord(str) {
		str = str.split(' ');
		console.log(str);
		var index = 0;
		var wordLength = 0;
		wordLength = str[0].length;
		for (var i = 1; i < str.length; i++) {
			if (wordLength < str[i].length){
				wordLength = str[i].length;
				index = i;
			}
			console.log("index="+index);
			console.log("str="+str[i]);
		}
		console.log("max=" + index);
		console.log("return="+str[index].length);
		return str[index].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
