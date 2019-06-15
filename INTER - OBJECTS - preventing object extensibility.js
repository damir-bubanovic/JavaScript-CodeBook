/*

!!INTER - OBJECTS - PREVENTING OBJECT EXTENSIBILITY!!

> You want to prevent others from extending an object

*.preventExtensions() - prevents new properties from ever being added to an object
*.isExtensible() - 	determines if an object is extensible 
					(whether it can have new properties added to it)

*/

/*
SOLUTION:
1) Use the ECMAScript 5 Object.preventExtensions() method to lock an object against
future property additions

> The Object.preventExtensions() method prevents developers from extending the
object with new properties, though property values themselves are still writable

2) 
*/
1)
"use strict";
var Test = {
	value1 : "one",
	value2 : function() {
		return this.value1;
	}
}

try {
	Object.preventExtensions(Test);
	
	// the following fails, and throws a TypeError in Strict mode
	Test.value3 = "test";
} catch(e) {
	console.log(e);
}

2)
if (Object.isExtensible(obj)) {
	// extend the object
}