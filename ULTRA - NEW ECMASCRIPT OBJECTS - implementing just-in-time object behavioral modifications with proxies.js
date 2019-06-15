/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - IMPLEMENTING JUST-IN-TIME OBJECT BEHAVIORAL MODIFICATIONS WITH PROXIES!!

> You want to attach behavior to an object, such as ensuring proper data types for values
or log when an object changes, but you want to do so transparently

*/

/*
SOLUTION:
+) Use the ES 6 Proxy to attach the desired behavior to the targeted action. To ensure that
only given properties are set on an object and that a number property for an object is
given an actual number, not a string or other value that can’t be converted to a number,
use a Proxy to test the value when it’s set on the object

>) Look up proxy traps on JavaScript
*/
+)
function propChecker(target) {
	return Proxy(target, {
		set: function(target, property, value) {
			if(property == 'price') {
				if(typeof value != 'number') {
					throw new TypeError("price is not a number");
				} else if (value <= 0) {
					throw new RangeError("price must be greater than zero");
				}
			} else if(property != 'name') {
				throw new ReferenceError("property '" + property + "' not valid");
			}
			target[property] = value;
		}
	});
}

function Item() {
	return propChecker(this);
}

try {
	var keyboard = new Item();
	keyboard.name = "apple"; // OK
	keyboard.type = "red delicious"; // throws ReferenceError
	keyboard.price = "three dollars"; // throws TypeError
	keyboard.price = -1.00; // throws RangeError
} catch(err) {
	console.log(err.message);
}


/*
EXAMPLE:
> Proxies can also wrap JavaScript built-in objects, such as Arrays, or even the Date object.
In the following code, a proxy is used to redefine the semantics of what happens when
the code accesses an array
*/
>)
var handler = {
	get: function(arry, indx){
		if (arry[indx] === 0) {
			return false;
		} else {
			return true;
		}
	}
};

var arr = [1,0,6,1,1,0];
var a = new Proxy(arr, handler);

console.log(a[2]); // true
console.log(a[0]); // true
console.log(a[1]); // false