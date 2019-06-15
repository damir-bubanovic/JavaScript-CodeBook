/*

!!INTER - ARRAY - VALIDATING ARRAY CONTENTS!!

> want to ensure that array contents meet certain criteria

*.test() - tests for a match in a string
*.every() - checks if all elements in an array pass a test (provided as a function)
*.some() - checks if any of the elements in an array pass a test (provided as a function)

*/

/*
SOLUTION:
+) Use the Array every() method to check that every element passes a given criterion. 
	>> the following code checks to ensure that every element in the array consists
	of alphabetical characters
*/
+)
// testing function
function testValue(element, index, array) {
	var textExp = /^[a-zA-Z]+$/;
	return textExp.test(element);
}

var elemSet = ["**",123,"aaa","abc","-",46,"AAA"];

// run test
var result = elemSet.every(textValue);
console.log(result);  // false
var elemSet2 = ["elephant", "lion", "cat", "dog"];
result = elemSet2.every(testValue);
console.log(result); // true


/*
OR
+) Or use the Array some() method to ensure that one or more of the elements pass the
criteria. 
	>> the following code checks to ensure that at least some of the array elements 
	are alphabetical strings
*/
+)
var elemSet = new Array("**", 123, "aaa", "abc", "-", 46, "AAA");

// testing function
function testValue(element) {
	var textExp = /^[a-zA-Z]+$/;
	return textExp.test(element);
}

// run test
var result = elemSet.some(testValue);
console.log(result); // true