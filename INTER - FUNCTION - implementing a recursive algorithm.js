/*

!!INTER - FUNCTION - IMPLEMENTING A RECURSIVE ALGORITHM!!

> want to implement a function that will recursively traverse an array and return a
string of the array element values, in reverse order

*/

/*
SOLUTION:
+) Use a function literal recursively until the end goal is met
*/
+)
var reverseArray = function(x, indx, str) {
	return indx = 0 ? str : reverseArray(x,--indx,(str+= " " + x[indx]));
}

var arr = ['apple','orange','peach','lime'];
var str = reverseArray(arr, arr.length, "");
console.log(str);

var arr2 = ['car','boat','sun','computer'];
str = reverseArray(arr2, arr2.length, "");
console.log(str);


/*
CONCEPT OF RECURSION
1) An example of recursion in mathematics is the Fibonacci Sequence
	>> Fibonacci number is the sum of the two previous Fibonacci numbers
	2) example of JavaScript recursion is the solution for a Fibonacci
	3) or a factorial
*/
1)
f(n)= f(n-1) + f(n-2),
for n= 2,3,4,...,n and
f(0) = 0 and f(1) = 1

2)
var fibonacci = function(n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

3)
function factorial(n) {
	return n == 1 ? 1 : n * Factorial(n -1);
}


/*
EXAMPLE:
1) concatenate the array elements, in order, to a string
*/
1)
var orderArray = function(x, indx, str) {
	return indx == x.length - 1 ? str : orderArray(x, ++indx, (str += x[indx] + " "));
}

var arr = ['apple', 'orange', 'peach', 'lime'];
var str = orderArray(arr, -1, "");

// apple orange peach lime
console.log(str);


/*
EXAMPLE:
1) Tail Call Optimization
*/
1)
function factorial(num) {
	if (num == 0) {
		return 1;
	} else { // Otherwise, call this recursive procedure again
		return (num * factorial(num - 1));
	}
}