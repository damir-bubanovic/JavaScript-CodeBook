/*

!!BASIC - VAR - SPLIT A STRING BY STRING!!

*.split - Returns an array of strings, each of which is a substring of string 
			formed by splitting it on boundaries formed by the string delimiter
	> string.split(separator,limit)

*/

var data = "name|phone|cat|address";
var values = data.split("|");
console.log("Split array is ", values);
// Split array is  ["name", "phone", "cat", "address"]


var string = "How are you doing today?";
var result = string.split(" ",3);
console.log(result);
// ["How", "are", "you"]