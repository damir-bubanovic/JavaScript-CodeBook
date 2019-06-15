/*

!!BASIC - VAR - RETURN PART OF A STRING!!

*.substring - Returns the portion of string specified by the start and length parameters

*/

var data = "name|phone|adress";
var value = data.substring(5, 10);
console.log("Substring is " + value);
// Substring is phone

value = data.substring(5);
console.log("Substring is now " + value);
// Substring is now phone|adress