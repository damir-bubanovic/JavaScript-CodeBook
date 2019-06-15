/*

!!INTER - OBJECT - PREVENTING ANY CHANGES TO AN OBJECT!!

> You’ve defined your object, and now you want to make sure that its properties aren’t
redefined or edited by other applications using the object

> ECMAScript 5 - several Object methods for better object management:
	+) Object.preventExtensions(obj) - least restrictive
		>> disallows adding new properties to an object, but you can still change the 
		object’s property descriptor or modify an existing property value
	+) Object.seal() - more restrictive
		>> prevents any modifications or new properties from being added to the property 
		descriptor, but you can modify an existing property value
	+) Object.freeze() - most restrictive
		>> disallows extensions to the object and restricts changes to the property 
		descriptor, prevents any and all edits to existing object properties

*/

/*
SOLUTION:
1) Use Object.freeze() to freeze the object against any and all changes

2) Check if an object is frozen using the companion method, Object.isFrozen()
*/
1)
"use strict";

var test = {
	value1 : "one",
	value2 : function() {
		return this.value1;
	}
};

try {
	// freeze the object
	Object.freeze(test);
	
	// the following throws an error in Strict Mode
	test.value2 = "two";
	
	// so does the following
	test.newProperty = "value";
	var val = "test";
	
	// and the following
	Object.defineProperty(test, "category", {
		get: function() {
			return test;
		},
		set: function(value) {
			test = value;
		},
		enumerable: true,
		configurable: true
	});
} catch(e) {
	console.log(e);
}

2)
if (Object.isFrozen(obj)) ...
