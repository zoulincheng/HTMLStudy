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



// Define a callback function.
function CheckIfPrime(value, index, ar) {
  high = Math.floor(Math.sqrt(value)) + 1;
  console.log("high="+high);

    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    } 
    return true;
}



function filterNum(value, index, arr){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    console.log(args);
}

/*
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  
  console.log(args);
  console.log(arr);
  var argsp = args.slice(1);
  console.log(argsp);

  var arrA = arr.filter(function(val){
        return val!=argsp[0];
  });

  console.log(arrA);

  var arrB = arrA.filter(function(val){
    return val != argsp[1];
  });
  console.log(arrB);
  return arrB;
}
*/
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  
  console.log(args);
  console.log(arr);
  var argsp = args.slice(1);
  console.log(argsp);

  
  for(i=0; i < argsp.length; i++){
     arr = arr.filter(function(val){
        return val!=argsp[i];
    }); 
  }


  console.log(arr);
  return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
