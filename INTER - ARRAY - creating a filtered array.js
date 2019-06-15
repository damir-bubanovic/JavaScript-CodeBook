/*

!!INTER - ARRAY - CREATING A FILTERED ARRAY!!

> want to filter element values in an array and assign the results to a new array

*.filter() - creates an array filled with all array elements that pass a test 
			(provided as a function)

*/

/*
SOLUTION:
+) Use the Array filter() method
*/
+)
var charSet = ["**", "bb", "cd", "**", "cc", "**", "dd", "**"];
var newArray = charSet.filter(
	function(element) {
		return (element != "**");
	}
);
console.log(newArray); // ["bb", "cd", "cc", "dd"]