/*

!!INTER - FUNCTION - PERFORMANCE - IMPROVINTG APPLICATION PERFORMANCE WITH MEMOIZATION!!
(Caching Calculations)

> You want to optimize your JavaScript applications and libraries by reducing the need
to repeat complex and CPU-intensive computations

> The key to the effective use of memoization is being aware that the technique
doesn’t result in performance improvements until the number of operations is 
significant enough to compensate for the extra effort

*typeof - returns a string indicating the type
*console.time() - starts a new timer with the name of timer
*console.timeEnd() - stops the timer with the specified name of timer and prints the elapsed 
					 time in console

*/

/*
SOLUTION:
+) Use function memoization in order to cache the results of a complex calculation
*/
+)
var fibonacci = function () {
var memo = [0,1];
var fib = function (n) {
var result = memo[n];
if (typeof result != "number") {
result = fib(n -1) + fib(n - 2);
memo[n] = result;
}
return result;
};
return fib;
}();


var fibonacci = function() {
	var memo = [0, 1];
	
	var fib = function(n) {
		var result = memo[n];
		
		if(typeof result != "number") {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();


/*
EXAMPLE:
+) A demonstration of memoization
*/
+)
// Memoized Function
var fibonacci = function() {
	var memo = [0, 1];
	
	var fib = function(n) {
		var result = memo[n];
		
		if(typeof result != "number") {
			retult = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();

// nonmemoized function
var fib = function(n) {
	return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

// run nonmemo function, with timer
console.time("non-memo");
for(var i = 0; i <= 10; i++) {
	console.log(i + " " + fib(i));
}
console.timeEnd("non-memo");

// now, memo function with timer
console.time("memo");
for(var i = 0; i <= 10; i++) {
	console.log(i + " " + fibonacci(i));
}
console.timeEnd("memo");