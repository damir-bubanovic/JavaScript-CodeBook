/*

!!INTER - OBJECTS - NAMESPACING YOUR JavaScript OBJECTS!!

> You want to encapsulate your data and functions in such a way as to prevent clashes
with other libraries

*.getElementById() - returns the element that has the ID attribute with the specified value
*.replace() - 	searches a string for a specified value, or a regular expression, and 
				returns a new string where the specified values are replaced

*/

/*
SOLUTION:
+) Use an object literal, what I call a one-off object, to implement the JavaScript version of
namespacing
*/
+)
var jscbObject = {
	
	// return element
	getElem: function(identifier) {
		return document.getElementById(identifier);
	},
	
	stripslashes: function(str) {
		return str.replace(/\\/g, '');
	},
	
	removeAngleBrackets: function(str) {
		return str.replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}
}

var sample = "<div>testing\changes</div>";

var result = jscbObject.stripslashes(sample);
result = jscbObject.removeAngleBrackets(result);

console.log(result); //&lt;div&gt;testingchanges&lt;/div&gt;