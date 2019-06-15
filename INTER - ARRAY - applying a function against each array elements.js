/*

!!INTER - ARRAY - APPLYING A FUNCTION AGAINST EACH ARRAY ELEMENTS!!

> want to use a function to check an array value, and replace it if it matches a given
criterion

*.forEach() - calls a provided function once for each element in an array, in order

*/

/*
SOLUTION:
+) Use the Array method forEach() to apply a callback function to each array element
*/
+)
var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];

function replaceElement(element, index, array) {
	if(element == "ab") {
		array[index] = "**";
	}
}

// apply function to each array element
charSets.forEach(replaceElement);
console.log(charSets); // ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]