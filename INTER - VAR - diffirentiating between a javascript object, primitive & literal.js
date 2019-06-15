/*

!!INTER - VAR - DIFFIRENTIATING BETWEEN A JAVASCRIPT OBJECT, PRIMITIVE & LITERAL!!

> People toss around terms like object, primitive, and literal. 
> What is the difference between the three, and how can you tell which is which?

*/

/*
SOLUTION:
1) A JavaScript literal represents a value of a specific type, such as a quoted string (String),
floating-point number (Number), or boolean (Boolean)

2) A JavaScript primitive is an instance of a particular data type, and there are five such in
the language: String, Number, Boolean, null, and undefined
	2.1) Of the primitive data types, three have complementary constructor objects: String,
		Number, and Boolean. 
		> These objects provide access to the built-in properties and methods that allow us to do 
		more than simple assignment and subsequent access
		
TIPS:
> Developers just want a number, boolean, or string variable to act like a number, boolean, or string, 
rather than an object; 
	>> we don’t need the enhanced functionality of the object. 
> When developers use strict equality or type checking in the code, they want a variable to match their 
expectations of data type, rather than be defined as “object” (see EXAMPLE - Testing)
*/
1)
"this is a string"
1.45
true

2)
"this is a string"
null
2.1)
var str1 = "this is a string";
console.log(str1.length); // using String object's length property


/*
EXAMPLE:
1) literals
2) primitive
3) object
*/
1)
var str1 = "this is a simple string"; // the quoted string is the literal
var num1 = 1.45; // the value of 1.45 is the literal
var answer = true; // the values of true and false are boolean literals

2)
var str1 = String("this is a simple string"); // primitive string
var num1 = Number(1.45); // primitive number
var bool1 = Boolean(true); // primitive boolean

3)
var str2 = new String("this is a simple string"); // String object instance
var num2 = new Number(1.45); // Number object instance
var bool2 = new Boolean(true); // primitive boolean


/*
EXAMPLE:
> Testing
*/
var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);

if(str1 === "string") {
	console.log('equal');
}

if(num1 === 1.45) {
	console.log('equal');
}

if(bool1 === true) {
	console.log('equal');
}

/*OR*/
console.log(typeof(str1));
console.log(typeof(num1));
console.log(typeof(bool1));
