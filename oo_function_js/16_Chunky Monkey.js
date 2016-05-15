/**
 * Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()
Array.slice()


function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


 */



function chunkArrayInGroups(arr, size) {
	var newArray = [];
	var newArrayCount = 0;
	var arrLen = arr.length;
	if (arrLen%size == 0){
		newArrayCount = arrLen/size;
	}else{
		newArrayCount = parseInt((arrLen/size)) + 1;
	}

	for (var i = 0; i < newArrayCount; i++){
		if (i*size + size > arrLen){
			newArray[i] = arr.slice(i*size);
		}else{
			newArray[i] = arr.slice(i*size,i*size + size);
		}
		
	}
  // Break it up.
  console.log(newArray);
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);