/*

!!INTER - MATH - CALCULATING THE LENGTH OF A CURCULAR ARC!!

> Given the radius of a circle, and the angle of an arc in degrees, find the length of the arc

*/

/*
SOLUTION:
+) Use Math.PI to convert degrees to radians, and use the result in a formula to find the
length of the arc
*/
+)
// angle of arc is 120 degrees, radius of circle is 2
var radians = degrees * (Math.PI / 180);
var arclength = radians * radius; // value is 4.18879020478...