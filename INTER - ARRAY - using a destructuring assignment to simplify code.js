/*

!!INTER - ARRAY - USING A DESTRUCTURING ASSIGNMENT TO SIMPLIFY CODE!!

> want to assign array element values to several variables, but you really don’t want
to have assign each, individually

*/

/*
SOLUTION:
+) Use ECMAScript 6’s destructuring assignment to simplify array assignment
*/
+)
var stateValues = [459, 144, 96, 34, 0, 14];

var [Arizona, Missouri, Idaho, Nebraska, Texas, Minnesota] = stateValues;

console.log(Missouri); // 144