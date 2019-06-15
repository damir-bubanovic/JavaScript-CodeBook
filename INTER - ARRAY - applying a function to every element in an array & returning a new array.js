/*

!!INTER - ARRAY - APPLYING A FUNCTION TO EVERY ELEMENT IN AN ARRAY & RETURNING A NEW ARRAY!!

> want to convert an array of decimal numbers into a new array with their hexadecimal
equivalents

*.map() - creates a new array with the results of calling a function for every array element
*.toString() - converts a number to a string

*/

/*
SOLUTION:
+) Use the Array map() method to create a new array consisting of elements from the old
array that have been modified via a callback function passed to the method
*/
+)
var decArray = [23, 255, 122, 5, 16, 99];
var hexArray = decArray.map(
	function(element) {
		return element.toString(16);
	}
);
console.log(hexArray); // ["17", "ff", "7a", "5", "10", "63"]