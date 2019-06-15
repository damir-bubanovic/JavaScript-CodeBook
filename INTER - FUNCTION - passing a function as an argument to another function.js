/*

!!INTER - FUNCTION - PASSING A FUNCTION AS AN RAGUMENT TO ANOTHER FUNCTION!!

> want to pass a function as an argument to another function

*/

/*
SOLUTION:
1) For the following function
2) Use a function expression (literal function) as argument
*/
1)
function otherFunction(x,y,z) {
	x(y,z);
};

2)
var param = function(arg1, arg2) { 
	alert(arg1 + " " + arg2); 
};
otherFunction(param, "Hello", "World");
/*OR*/
otherFunction(
	function(arg1,arg2) {
		alert(arg1 + ' ' + arg2); 
	}, 
	"Hello","World"
);