/*

!!BASIC - VAR - SEARCH A STRING FOR THE LAST OCCURANCE OF SUBSTRING!!

*.lastIndexOf - Search a string for the last occurrence of substring
	> string.lastIndexOf(searchvalue,start)

*/

var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");
console.log(n);
// 36


var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet", 20);
console.log(n);
// 6