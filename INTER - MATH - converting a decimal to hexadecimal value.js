/*

!!INTER - MATH - CONVERTING A DECIMAL TO HEXADECIMAL VALUE!!

> You have a decimal value, and need to find its hexadecimal equivalent

> Although decimals can be converted to any base number (between a range of 2 to 36),
only the octal, hexadecimal, and decimal numbers can be manipulated, directly as
numbers

*.toString() - converts a number to a string

*/

/*
SOLUTION:
> Use the toString() method
*/
var num = 255;

// displays ff, which is hexadecimal equivalent for 255
console.log(num.toString(16));


/*
EXAMPLES:
1) hexadecimal (16) and octal (8)
2) decimal number can be converted to another radix, in a range from 2 to 36
*/
1)
var octoNumber = 0255; // equivalent to 173 decimal
var hexaNumber = 0xad; // equivalent to 173 decimal

2)
var decNum = 55;
var octNum = decNum.toString(8); // value of 67 octal
var hexNum = decNum.toString(16); // value of 37 hexadecimal
var binNum = decNum.toString(2); // value of 110111 binary