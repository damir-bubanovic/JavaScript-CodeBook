/*

!!INTER - OBJECTS - EXTENDING AN OBJECT BY DEFINING A NEW PROPERTY!!

> You can easily slap a new property onto an object, but you want to do so in such a way
that you have more control of how it’s used

*/

/*
SOLUTION:
+ Use the defineProperty() method to add the property
1) Object
2) Use the following JavaScript
*/
1)
var data = {};

2)
var data = {};


Object.definePropery(data, "type", {
	value: "primary",
	enumerable: true
});

console.log(data.type); // primary

data.type = "secondary";
console.log(data.type); // nope, still primary


Object.defineProperty(data, "id", {
	value: 1,
	writable: true	
});

console.log(data.id); // 1
data.id = 300;
console.log(data.id); // 300

for(prop in data) {
	console.log(prop); // only type displays
}


/*
EXAMPLE:
> There are two variations of property you can create with defineProperty(): 
	>> a data descriptor, as demonstrated in the solution, 
	>> (2) and an accessor descriptor, defined with a getter-setter function pair
*/
2)
var data = {};
var group = "history";

Object.defineProperty(data, "category", {
	get: function() {
		return group;
	},
	set: function(value) {
		group = value;
	},
	enumerable: true,
	configurable: true
});

console.log(data.category); // history
group = "math";

console.log(data.category); // math
data.category = "spanish";
console.log(data.category); // spanish
console.log(group); // spanish