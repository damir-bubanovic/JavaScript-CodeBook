/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - CREATING UNIQUE KEY / VALUE PAIRS WITH UNIQUELY DIFFERENT KEYS!!

> You want to create a set of key/value pairs, but not all of the keys are strings

*/

/*
SOLUTION:
> Use the new Map object
*/
>)
var myMap = new Map();

myMap.set("value1", "this is value");

myMap.set(3, "another value");

myMap.set(NaN, "isn't this interesting");

myMap.set(window, "really now");

console.log(myMap.get("value1")); // this is a value
console.log(myMap.get(NaN)); // isn't this interesting
console.log(myMap.get(3)); // another value
console.log(myMap.get(window)); // really now


/*
EXAMPLE:
> As with Sets, Map keys and values can be objects, as well as scalar values. This includes
the built-in objects, such as window. But the objects must be exactly equal—they can’t
be equivalent. In the following code snippet, two object literals, an array, and window
are used to set members in the Map
*/
>)
var b = {first: 'apple', second: 'pear'};
var c = {first: '5', second: '1'};
var d = [1,2,3,4];
var e = b;

var myMap = new Map();

myMap.set(b, 'first');
myMap.set(c, 'second');
myMap.set(d, 'array');
myMap.set(window,'global');

console.log(myMap.get(window)); // 'global'
console.log(myMap.get([1,2,3,4])); // undefined
console.log(myMap.get(d)); // 'array'
console.log(myMap.get(e)); // 'first'