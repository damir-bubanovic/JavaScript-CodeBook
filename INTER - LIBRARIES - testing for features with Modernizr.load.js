/*

!!INTER - LIBRARIES - TESTING FOR FEATURES WITH MODERNIZR.LOAD!!

> You’re using newer technologies, and you want to make sure the client can support the
technologies before you load them

*/

/*
SOLUTION:
+) You can use a library such as Modernizr to handle basic HTML5/CSS differences between
browsers. But you can also use a companion tool, Modernizr.load, to test to see
if an existing technology is supported
	>> Look up loading & usage
*/
+)
Modernizr.load({
	test: Modernizr.touch,
	yep : 'touchtest.js'
});