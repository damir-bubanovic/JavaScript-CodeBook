/*

!!INTER - FUNCTION - ARRAY - CONVERTING FUNCTION ARGUMENTS INTO AN ARRAY!!

> You want to use Array functionality on a function’s arguments, but the arguments object
isn’t an array

*Array.prototype.slice() - returns a shallow copy of a portion of an array into a new array object
*parseInt() - parses a string and returns an integer
*.querySelectorAll() - returns all elements in the document that matches a specified CSS selector(s),
					   as a static NodeList object

*/

/*
SOLUTION:
1) Use Array.prototype.slice() and then the function call() method to convert the
arguments collection into an array
2) Use a handy Array method like reduce() with the arguments
*/
1)
function someFunc() {
	var args = Array.prototype.slice.call(arguments);
	...
}
/*OR - simpler approach*/
function someFunc() {
	var args = [].slice.call(arguments);
}

2)
function sumRounds() {
	var args = [].slice.call(arguments);
	return args.reduce(
		function(val1,val2) {
			return parseInt(val1, 10) + parseInt(val2, 10);
		}
	);
}

var sum = sumRounds("2.3", 4, 5, "16", 18.1);

console.log(sum); // 45


/*
EXAMPLE:
> The approach described for converting arguments into an array can also be used to
convert a NodeList into an array
> A query for all div elements results in a NodeList. You can process each node using
forEach() if you first convert the NodeList to an array
*/
+) HTML
<div>test</div>
<div>test2</div>
<div>test3</div>

+) JavaScript
var nlElems = document.querySelectorAll('div');
var aElems = [].slice.call(nlElems);

aElems.forEach(
	function(elem) {
		console.log(elem.textContent);
	}
);