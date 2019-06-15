/*

!!INTER - ARRAY - SEARCHING THROUGH AN ARRAY!!

> want to search an array for a specific value and get the array element index if found

*.indexOf() - returns the position of the first occurrence of a specified value in a string
*.lastIndexOf() - returns the position of the last occurrence of a specified value in a string
*.findIndex() - returns the index of the first element in an array that pass a test (provided as a function)
			  - executes the function once for each element present in the array

*/

/*
SOLUTION:
1) Use the Array methods indexOf() & lastIndexOf()
	> The indexOf() method returns the first one found, the lastIndexOf() returns the 
	last one found
	
2) Both methods can take a starting index, setting where the search is going to start

3) findIndex() - method to find an array element whose value equals or exceeds 100
*/
1)
var animals = new Array("dog","cat","seal","walrus","lion", "cat");

console.log(animals.indexOf("cat")); // prints 1
console.log(animals.lastIndexOf("cat")); // prints 5

2)
var animals = ["dog","cat","seal","walrus","lion", "cat"];

console.log(animals.indexOf("cat",2)); // prints 5
console.log(animals.lastIndexOf("cat",4)); // prints 1

3)
var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];

var over = nums.findIndex(
	function(element) {
		return (element >= 100);
	}
);

console.log(nums[over]);
