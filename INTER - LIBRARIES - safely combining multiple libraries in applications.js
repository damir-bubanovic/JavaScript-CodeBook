/*

!!INTER - LIBRARIES - SAFELY COMBINING MULTIPLE LIBRARIES IN APPLICATIONS!!

> You want to incorporate more than one external library, as well as your own, into one
application without each stepping all over the others

*/

/*
SOLUTION:
> The safest approach for using multiple libraries is to pick ones that are all based on the
same framework, such as using only libraries based on jQuery, the framework used in
earlier recipes.
> If that strategy doesn’t work, make sure the libraries all use good programming practices,
and none are overriding functionality or event handling provided by the others
*/

/*
EXAMPLE:
1) Well-designed libraries do not do things like this
	> Use the DOM Level 0 event handling
2) Neither this namespace
	> Each function like this ends up in the global space, which increases the likelihood of
	clashes with other libraries
3) Well-designed libraries typically use an anonymous function, ensuring no clash with whatever 
is exposed to the global space	
4) Well-designed libraries provide good documentation of all of the publicly exposed bits,
including methods, properties, and events
	> The Underscore.js library, covered earlier, provides a wonderfully annotated version 
	of the source code—a concept that should be mandatory for all library developers
*/
1)
window.onload=function() {...}

2)
function foo() { ... }
function bar() { ... }

3)
(function() {
	var root = this;
	...
	
	if (typeof define === 'function' && define.amd) {
		define('underscore', [], function() {
		return _;
	});
}
}).call(this);


/*
GENERAL RULES:

	• A good library does not use DOM Level 0 event handling.
	• A well-defined library uses an anonymous function to wrap its functionality and
	doesn’t pollute the global namespace.
	• A well-defined library introduces few global objects.
	• Libraries that play well with others provide event hooks. Well-behaved libraries also
	don’t extend existing objects via the prototype property.
	• Solid libraries are well-tested, and provide these tests as deliverables.
	• Stable libraries are actively maintained, and preferably, open sourced.
	• Secure libraries provide documentation of known bugs and problems, and a way
	to report on any bugs and problems you find.
	• Usable libraries are well-documented. Bandwidth-friendly libraries are optimized
	and compressed, though you can always compress the library yourself.
	• Confident libraries aren’t built on the assumption that no other library will be used.
*/