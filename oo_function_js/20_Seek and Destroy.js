/**
 * Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()


function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


 */




function destroyer(arr) {
	var args = Array.from(arguments);
	var arrA = [];
	console.log(args);
	console.log(args.length);
  // Remove all the values
  	for (var i = 1; i < args.length; i++){
  		for (var j = 0; j < arr.length; j++){
  			if (arr[j] != args[i]){
  				arrA.push(arr[j]);
  			}
  		}
  	}
  	console.log(arrA);
    return arrA;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);