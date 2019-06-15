/*

!!INTER - FUNCTION - REDUCING REDUNDANCY BY USING A PARTIAL APPLICATION!!

> You have a function with three arguments (has an arity of three (3)) but the first two
arguments are typically repeated based on specific use. You want to eliminate the repetition
of arguments whenever possible

*[].slice.call - returns a shallow copy of a portion of an array into a new array object
*.concat() - returns a new array comprised of the array on which it is called joined with 
			 the array(s) and/or value(s) provided as arguments
*.bing() -  creates a new function that, when called, has its this keyword set to the provided 
			value, with a given sequence of arguments preceding any provided when the new function 
			is called

*/

/*
SOLUTION STEPS:
1) Create one function that manipulates three values and returns a result
2) Create another function that accepts two arguments, and returns the previously
created function, but this time, encoding two of the arguments
3) Only one argument is needed for the new functions
*/
1)
function makeString(ldelim, str, rdelim) {
	return ldelim + str + rdelim;
}

2)
function quoteString(str) {
	return makeString("'", str, "'");
}

function barString(str) {
	return makeString("-", str, "-");
}

function namedEntity(str) {
	return makeString("&#", str, ";");
}

3)
console.log(quoteString("apple")); // "'apple'"
console.log(barString("apple")); // "-apple-"

console.log(namedEntity(169)); // "&#169; - copyright symbol


/*
EXAMPLE:
> Partial Function Factory

1) We can reduce the redundancy of our function factory even further by creating a generic
function, named partial(), capable of reducing any number of arguments for any number of 
functions
2) Create functions to generate strings, or add a constant to numbers, or any
other type of functionality
3) We have to be aware, of the order of arguments
*/
1)
function partial(fn /*, args...*/) {
	var args = [].slice.call(arguments, 1);
	return
		function() {
			return fn.apply(this, args.concat([].slice.call(arguments)));
		};
}

2)
function add(a, b) {
	return a + b;
}

var add100 = partial(add, 100);
console.log(add100(14)); // 114

3)
function makeString(ldelim, rdelim, str) {
	return ldelim + str + rdelim;
}

var namedEntity = partial(makeString, "&#", ";");

console.log(namedEntity(169));


/*
EXAMPLE:
> Using bind() to Partially Provide Arguments

+) Rather than having to use partial() to create the named entity function, we can now
use bind() to provide the same functionality, passing in undefined as the first argument
*/
+)
function makeString(ldelim, rdelim, str) {
	return ldelim + str + rdelim;
}

var named = makeString.bind(undefined, "&#", ";");

console.log(named(169)); // "&#169;"
