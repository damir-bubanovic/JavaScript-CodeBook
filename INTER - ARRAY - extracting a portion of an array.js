/*

!!INTER - ARRAY - EXTRACTING A PORTION OF AN ARRAY!!

> want to extract out a portion of an array but keep the original array intact

*.slice() - returns the selected elements in an array, as a new array object

*/

/*
SOLUTION:
1) slice() method extracts a shallow copy of a portion of an existing array

2) slice() is used on an array of array elements to extract out of the arrays. 
	>> The contents are modified and both arrays are printed out
	>> The changes to the new array are reflected in the old
*/
1)
var animals = ['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit', 'goose'];

var domestic = animals.slice(4,7);
console.log(domestic); // ['cat','dog','rabbit'];

2)
var mArray = [];
mArray[0] = ['apple', 'pear'];
mArray[1] = ['strawberry', 'lemon'];
mArray[2] = ['lime', 'peach', 'berry'];

var nArray = mArray.slice(1, 2);
console.log(mArray[1]); // ['strawberry','lemon']

nArray[0][0] = 'raspberry';
console.log(nArray[0]); // ['raspberry','lemon']
console.log(mArray[1]); // ['raspberry','lemon']