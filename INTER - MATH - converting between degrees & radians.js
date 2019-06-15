/*

!!INTER - MATH - CONVERTING BETWEEN DEGREES & RADIANS!!

> You have an angle in degrees. To use the value in the Math object’s trigonometric functions,
you need to convert the degrees to radians

> All Math trigonometric methods (sin(), cos(), tin(), asin(), acos(), atan(), and atan2()), 
take values in radians, and return radians as a result. Yet it’s not unusual for people to 
provide values in degrees rather than radians, as degrees are the more familiar unit of measure

*/

/*
SOLUTION:
1) To convert degrees to radians, multiply the value by (Math.PI / 180):
2) To convert radians to degrees, multiply the value by (180 / Math.PI):
*/
1)
var radians = degrees * (Math.PI / 180);

2)
var degrees = radians * (180 / Math.PI);