/*

!!INTER - LIBRARIES - GOING BEYOND THE MATH OBJECTS CAPABILITY!!

> The Math object provides good, basic mathematical functionality, but lacks advanced
or business-specific math functionality that you need. In addition, Math does everything
in floating point, and you need functions that work to a higher degree of precision

*/

/*
SOLUTION:
> Use a library that expands on the Math object’s capability
*/


/*
Math.js

1.1) It provides a set of functions to perform operations, such as
add() and multiply(), that have the added advantage of being chainable
1.2) It also provides functionality to parse a mathematical expression, with its own version
of eval():
1.3) In addition, it supports matrices. For example, to create a [3,3] matrix
1.4) Note that the matrix arrays are contained within an outer array. Use the following to
create a zero-filled matrix
1.5) Math.js also provides support for BigNumbers, numbers that have arbitrary precision,
as well as complex numbers, with both real and imaginary parts
*/
1.1)
var result = math.select(9)
			.add(3)
			.subtract(6)
			.multiply(23)
			.done(); // get value
console.log(result); //{ value: 138 }

1.2)
var exp = "4 + 3 * 10 / 8";
console.log(math.eval(exp)); // 7.75

1.3)
var m = math.matrix([[4,3,2],[6,6,8],[7,4,5]]);
console.log(m.valueOf()); //[ [ 4, 3, 2 ], [ 6, 6, 8 ], [ 7, 4, 5 ] ]

1.4)
var z = math.zeros(2,2);
console.log(z.valueOf()); // [ [ 0, 0 ], [ 0, 0 ] ]

1.5)
var b = math.complex('4 - 2i');
b.re = 5;
console.log(b.valueOf()); // 5 - 2i


/*
Accounting.js

2.1) You can use Accounting.js to format a number into a currency format
2.2) You can also format entire columns of numbers
2.3) The formatting isn’t all U.S. dollar–based either
*/
2.1)
var options = {
	symbol : "$",
	decimal : ".",
	thousand: ",",
	precision : 2,
	format: "%s%v"
};

// Example usage:
var m = accounting.formatMoney(45998307);
console.log(m);// $45,998,307.00

2.2)
var list = [[456, 12, 3], [99, 23,3],[667,902,12]];
var c = accounting.formatColumn(list);
console.log(c); [ [ '$456.00', '$ 12.00', '$ 3.00' ],
				[ '$99.00', '$23.00', '$ 3.00' ],
				[ '$667.00', '$902.00', '$ 12.00' ] ]
				
2.3)
var p = accounting.formatMoney(4899.49, "€", 2, ".", ",");
console.log(p); // €4.899,49


/*
Advanced Mathematics and Statistics (Numbers.js)

1.1) The library provides advanced calculus functions, matrix math, and even some statistics
*/
1.1)
numbers.statistic.mean(array);
numbers.statistic.median(array);
numbers.statistic.mode(array);
numbers.statistic.standardDev(array);
numbers.statistic.randomSample(lower, upper, n);
numbers.statistic.correlation(array1, array2);