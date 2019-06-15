/*

!!INTER - FUNCTION - PROVIDING A DEFAULT PARAMETER!!

> You want to specify a default value for a parameter if no argument value is given when
a function is called

*typeof() - returns a string indicating the type

*/

/*
SOLUTION:
1)) Use the new ECMAScript 6 (ES 6) default parameter functionality

> One of the biggest gaps in JavaScript is the lack of a default parameter

2) To maintain the proper argument position, you can pass a value of undefined in the argument

3) To ensure future compatibility, test the parameter for the undefined value and adjust
accordingly
*/
1)
function makeString(str, ldelim = "'", rdelim = "'") {
	return ldelim + str + rdelim;
}

console.log(makeString(169)); // "'169'"

2)
console.log(makeString(169, undefined, "-")); // "'str-"

3)
function makeString(str, ldelim="'", rdelim="'") {
	ldelim = typeof ldelim !== 'undefined' ? ldelim : "'";
	rdelim = typeof rdelim !== 'undefined' ? rdelim : "'";
	
	return ldelim + str + rdelim;
}