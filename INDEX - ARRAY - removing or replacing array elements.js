/*

!!INTER - ARRAY - REMOVING OR REPLACING ARRAY ELEMENTS!!

> want to find occurrences of a given value in an array, and either remove the element
or replace with another value

*.splice() - adds/removes items to/from an array, and returns the removed item(s)
*.indexOf() - returns the position of the first occurrence of a specified value in a string
*.lastIndexOf() - returns the position of the last occurrence of a specified value in a string
*.toString() - converts a number to a string

*/

/*
SOLUTION:
1) Use the Array indexOf() and splice() to find and remove/replace array elements

2) If the index is negative, the elements will be spliced from the end rather
than the beginning of the array

3) If the number of elements to splice is not provided, all elements from the index to the
end will be removed

4) The last parameter, the replaced value, can be a set of replacement elements, separated
by commas
*/
1)
var animals = new Array("dog","cat","seal","walrus","lion", "cat");

// remove the element from array
animals.splice(animals.indexOf("walrus"), 1); // dog,cat,seal,lion,cat

// splice in new element
animals.splice(animals.lastIndexOf("cat"), 1, "monkey");

// dog,cat,seal,lion,monkey
console.log(animals.toString());

2)
var animals = ["cat","walrus","lion", "cat"];

// splice in new element
animals.splice(-1,1,"monkey"); // cat,walrus,lion,monkey

3)
var animals = ["cat","walrus","lion", "cat"];

// remove all elements after second
animals.splice(2); // cat,walrus

4)
var animals = ["cat","walrus","lion", "cat"];

// replace second element with two
animals.splice(2,1,"zebra","elephant"); // cat,walrus,zebra,elephant,cat


/*
EXAMPLE:
> remove or replace all instances of a particular element
+) using looping and splice to replace and remove elements
*/
+)
var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];

// replace element
while(charSets.indexOf("ab") != -1) {
	charSets.splice(charSets.indexOf("ab"), 1, "**");
}
// ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]
console.log(charSets);

// delete new element
while(charSets.indexOf("**" != -1)) {
	charSets.splice(charSets.indexOf("**", 1));
}
console.log(charSets);	// ["bb", "cd", "cc", "dd"]