/*

!!INTER - FUNCTION - USING AN ANONYMOUS FUNCTION TO WRAP GLOBAL VARIABLES!!

> You need to create a variable that maintains state between function calls, 
but you want to avoid global variables

*/

/*
SOLUTION:
+) Use an Immediately-Invoked Function Expression (IIFE) to wrap variables and 
functions both

> An anonymous function surrounds the global values, is immediately evaluated, and
then never evaluated again
> Now you can create as many variables as you need without polluting the global space
or colliding with global variables used in other libraries
*/
+)
(function() {
	var i = 0;
	
	function increment() {
		i++;
		alert("value is " + i);
	}
	
	function runIncrement() {
		while (i < 5) {
			increment();
		}
	}
	
	window.onload = function() {
		runIncrement();
	}
})();