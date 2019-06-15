/*

!!INTER - LIBRARIES - ADDING SUPPORT FOR PRIVATE DATA MEMBERS!!

> You’ve discovered reusable functionality and created an object with the functionality
defined as object methods. However, you also need to add support for private data
members, too.

*/

/*
SOLUTION:
1) One approach to ensuring a data member isn’t exposed to public access is to redefine
the object as a function with publicly exposed methods or data objects that use the
private data or methods

2) If we don’t want to use a declared function, or abandon our use of an object,
we can encapsulate that object in an IIFE
*/
1)
var StrManipulate = function() {
	var replacementText = "**";
	
	this.replaceSlashes = function(str) {
		return str.replace(/\\/g, replacementText);
	};
	
	this.replaceAngleBrackets = function(str) {
		return str.replace(/</g, replacementText).replace(/>/g, replacementText);
	};
};

/*And create a new instance of the object*/
var strObj = new StrManipulate();
console.log(strObj.replaceAngleBrackets("<html>"); // "**html**"

2)
(function() {
	var replacementStr = "**";
	
	this.jscb = {
	// return element
	getElem: function (identifier) {
		return document.getElementById(identifier);
	},
	
	replaceSlashes : function(str) {
		return str.replace(/\\/g, replacementStr);
	},
	
	replaceAngleBrackets: function(str) {
		return str.replace(/</g, replacementStr).replace(/>/g, replacementStr);
	}
};
})();