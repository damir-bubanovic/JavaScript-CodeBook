/*

!!BASIC - TYPES!!

> There are two groups of types in JavaScript: primitives and objects

> Primitives:
	+) numbers
	+) strings
	+) booleans
	+) null
	+) undefined

> Objects:	
	+) document
	+) element
	+) math
	+) car
	+) dog
	+) song
	+) typeof
	+) NaN
	+) ==
	+) +
	
*/

/*
UNDEFINED:
> value assigned to things that don’t yet have a value
	1) variable that’s not been initialized yet
	2) property that doesn’t exist (or has been deleted) 
		(example object property)
	+) array item that isn’t there

*/
1)
var x;
if (x == undefined) {
	// x isn’t defined! just deal with it!
}

2)
var customer = {
	name: "Jenny"
};

if (customer.phoneNumber == undefined) {
	// get the customer's phone number
}


/*
TYPEOF
> see what type the information is?
*/
var subject = "Just a string";

var probe = typeof subject;
document.write(probe);


/*
NULL
> return value that means “no object.”
1) set a variable to null directly

EARLY STAGES OF JAVASCRIPT (TRUE STILL)
> The idea was to have one value for variables that haven’t been initialized 
(undefined) to anything yet, and another that means the lack of an object (null)
	>> it’s a little redundant
	>> today null is very similar to undefined
		>>> null in places where an object should be but one can’t be created or found
		>>> undefined when you have a variable that hasn’t been initialized, or an 
		object with a missing property, or an array with a missing value
	
	
USE NULL
> Keep in mind that getting null doesn’t necessarily mean something is wrong.
	>> It may just mean something doesn’t exist yet and needs to be created, or something 
	doesn’t exist and you can skip it
	
2) how to use null
3) see if the element with id “weatherDiv” exists
*/
1)
var killerObjectSomeday = null;

2)
var header = document.getElementById("header");

if (header == null) {
	// okay, something is seriously wrong if we have no header
}

3)
var weather = document.getElementById("weatherDiv");

if (weather != null) {
	// create content for the weather div
}


/*
NaN (Not A Number) (Number that can’t be represented)
> represent numeric results that, well, can’t be represented
> NaN is of type number (mind blown)

1) test for NaN (returns true if the value passed to it is not a number)
*/
var a = 0/0;
var b = "food" * 1000;
var c = Math.sqrt(-9);
// all in NaN

var compare = (NaN == NaN) 
// false

1)
if (isNaN(myNum)) {
	myNum = 0;
}


/*
==
> comparisons
1) example (number & "number")
2) example (number & string)
3) example (number & boolean)
4) example ("number" & boolean)
5) example (undefined & null)
6) example (number & empty string)

> to be absolutelly strict and have none of these "shananigans"
use === 
	>> Two values are strictly equal only if they have the same type and the same value
	>> THE TREND is to use === operators because the are more pure!!!
	
7) comparing objects
	> When we test equality of two object variables, we compare the references to those objects
	> Two references are equal only if they reference the same object
*/
1)
99 == "99"
99 == 99
true

2)
99 == "vanilla"
99 == NaN
false

3)
1 == true
1 == 1
true

4)
"1" == true
"1" == 1
1 == 1
true

5)
undefined == null
true

6)
1 == ""
1 == 0
false

7)
if (var1 === var2) {
	// wow, these are the same object!
}


/*
+
> concatination examples
*/
var addi = 3 + "4"; // 34
var plusi = "4" + 3; // 43
var multi = 3 * "4"; // 12
var divi = 80 / "10"; // 8
var mini = "10" - 5; // 5

var order = 1 + 2 + " pizzas"; // 3 pizzas
var order = 1 + (2 + " pizzas"); // 12 pizzas


/*
There are five falsey values in JavaScript:
	+) undefined is falsey.
	+) null is falsey.
	+) 0 is falsey.
	+) The empty string is falsey.
	+) NaN is falsey.
*/
