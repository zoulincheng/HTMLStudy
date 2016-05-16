/**
 * Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
 */


function rot13(str) { // LBH QVQ VG!
  var codeZ ='Z'.charCodeAt(0);
  var codeA ='A'.charCodeAt(0);
  var arrStr =[];
  var strarr =[];
  var codeChar;
  console.log(codeZ);
  console.log(codeA);
  for (var i = 0; i < str.length; i++){
    if (str[i].charCodeAt(0) >= codeA && str[i].charCodeAt(0)){
      //console.log(str[i].charCodeAt(0));
      var ucode = parseInt(str[i].charCodeAt(0));
      //codeChar = (ucode + 13)%(codeZ-codeA+1) + codeA;
      codeChar = (ucode + 13 - codeA)%(codeZ-codeA + 1) + codeA;
      console.log("codechar " + codeChar);
    } else {
      codeChar = str[i];
    }
    arrStr.push(codeChar);
  }
  console.log(arrStr);
  console.log(strarr);
  for (var i = 0; i < arrStr.length; i++){
    if (arrStr[i] >= codeA && arrStr[i] <= codeZ){
      codeChar = String.fromCharCode(arrStr[i]);
    } else {
      codeChar = arrStr[i];
    } 
    strarr.push(codeChar);   
  }

  console.log(strarr);
  str = strarr.join('');
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");