/*

!!INTER - CLIENT-SERVER COMMUNICATION & DATA - JSON - PARSING & AUTOMATICALLY MODIFYING JSON!!

> You want to safely create a JavaScript object from JSON. You also want to replace the
numeric representation of true and false (1 and 0, respectively) with their Boolean
counterparts (true and false)

*/

/*
SOLUTION:
+) Parse the object with the JSON built-in capability added to browsers via ECMAScript
5. To transform the numeric values to their Boolean counterparts, create a reviver
function
*/
+) 
var jsonobj = '{"test" : "value1", "test2" : 3.44, "test3" : 0 }';

var obj = JSON.parse(jsonobj, function(key, value) {
	if(typeof value == "number") {
		if(value == 0) {
			value = false;
		} else if(value == 1) {
			value = true;
		}
	}
	return value;
});

console.log(obj.test3); // false


/*
EXAMPLE:
> To figure out how to create JSON, think about how you create an object literal and just
translate it into a string (with some caveats)
1) If the object is an array, 2) the JSON notation would be equivalent to the literal notation for the array
	>> Note the use of double quotes ("") rather than single, which are not allowed in JSON
	
3) If you’re working with an object, 4) the JSON notation would be
*/
1)
var arr = new Array("one","two","three");
2)
["one","two","three"];

3)
var obj3 = {
	prop1 : "test",
	result : true,
	num : 5.44,
	name : "Joe",
	cts : [45,62,13]
};
4)
{"prop1":"test","result":true,"num":5.44,"name":"Joe","cts":[45,62,13]}