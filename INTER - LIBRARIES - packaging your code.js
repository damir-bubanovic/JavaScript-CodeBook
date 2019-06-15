/*

!!INTER - LIBRARIES - PACKAGING YOUR CODE!!

> You want to package your code for reuse in your own projects, and possible reuse by
others.

*/

/*
SOLUTION:
> If your code is in one big file, look for opportunities to extract reusable functionality
into self-contained objects in a separate library

1) Transform the following
2) Into this
*/
1)
function getElem(identifier) {
	return document.getElementById(identifier);
}

function stripslashes(str) {
	return str.replace(/\\/g, '');
}

function removeAngleBrackets(str) {
	return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

2)
var jscbObject = {
	// return element
	getElem : function(identifier) {
		return document.getElementById(identifier);
	},
	
	stripslashes : function(str) {
		return str.replace(/\\/g, '');
	},
	
	removeAngleBrackets: function(str) {
		return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
};