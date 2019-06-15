/*

!!INTER - VAR - VERIFY VARIABLE IS DEFINED, STRING & NOT-EMPTY!!

> want to verify that a variable is defined, is a string, and is not empty

*typeof - returns a string indicating the type of variable
*.length - return the number of characters in a string
*.valueOf() - return the primitive value of a string object

*/

/*
SOLUTION:

1) simple solution
> ALERT <
	If the variable isn’t a string, the test will fail, and if the string’s length 
	isn’t longer than zero (0), it will fail.
	
2) if you’re interested in testing for a string, regardless of whether it’s a String
object or a string literal, as well as test to ensure the variable isn’t null
	> works even with this -> var str = new String('test'); (Object)

*/
1)
if(typeof unknownVariable === 'string' && unknownVariable.length > 0) {
	/*Do something ... */
}

2)
/*variable is not undefined, has characters in it and the type is string*/
if(((typeof variable != 'undefined' && variable) &&
	variable.length() > 0) && typeof variable.valueOf() == 'string') {
	console.log("Good String!");
} else {
	console.log("Bad String!");
}
