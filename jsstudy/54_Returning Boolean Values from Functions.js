/*
Selecting from many options with Switch Statements





If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is a pseudocode example:
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}

case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Instructions

Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"



Here are some helpful links:
Switch Statement

*/



function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val){
    case "bob":
      answer += "Marley";
      break;
    case 42:
      answer += "The Answer";
      break;
    case 1:
      answer += "There is no #1";
      break;
    case 99:
      answer += "Missed me by this much!";
      break; 
    case 7:
      answer += "Ate Nine";
      break;       
    default:
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);



