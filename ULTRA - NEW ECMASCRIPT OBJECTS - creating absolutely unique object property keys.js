/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - CREATING ABSOLUTELY UNIQUE OBJECT PROPERTY KEYS!!

> You want to create unique object property keys that you’re absolutely confident will
remain unique and won’t clash

*/

/*
SOLUTION:
+) Use the ECMAScript 6 Symbol to create the unique key
*/
+)
var uniqueId = Symbol();
var newObj = {};
newObj[uniqueId] = 'No two alike';
console.log(newObj[uniqueId]); // 'No two alike'
var uniqueId2 = Symbol('one');
var uniqueId3 = Symbol('one');


/*
EXAMPLE:
+) Symbol can also be used to create a set of enumerated values
*/
+)
var green = Symbol();
var red = Symbol();

function switchLight(light) {
	if (light === green) {
		console.log("Turning light red");
		light = red;
	} else {
		console.log("Turning light green");
		light = green;
	}
	return light;
}

var light = green;
light = switchLight(light);
light = switchLight(light);