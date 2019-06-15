/*

!!INTER - FUNCTION - CREATING A FUNCTION THAT REMEMBERS ITS STATE!!

> You want to create a function that can remember data, but without having to use global
variables and without resending the same data with each function call

*/

/*
SOLUTION:
1) Create an outer function that takes one or more parameters, and then an inner function
that also takes one or more parameters but uses both its and its parent function’s parameters.
Return the inner function from the outer function, and assign it to a variable.
From that point, use the variable as a function

2) Outer function cannot access the inner function’s arguments or local data
because they exist in a different scope
	>> When a function returns a function that refers to the outer function’s local scope
*/
1)
function greetingMaker(greeting) {
	function addName(name) {
		return greeting + " " + name;
	}
	return addName;
}

// Now, create new partial functions
var daytimeGreeting = greetingMaker("Good Day to you");
var nightGreeting = greetingMaker("Good Evening");
...

// if daytime
console.log(daytimeGreeting(name));
// if night
console.log(nightGreeting(name));

2)
function outer(x) {
	return 
		function(y) { 
			return x * y; 
		};
}

var multiThree = outer(3);
alert(multiThree(2)); // 6 is printed
alert(multiThree(3)); // 9 is printed