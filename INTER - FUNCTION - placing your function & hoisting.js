/*

!!INTER - FUNCTION - PLACING YOUR FUNCTION & HOISTING!!

> You’re not sure where to place your function to ensure it’s accessible when needed

*/

/*
SOLUTION:
> If you’re using a declarative function, you can place the function anywhere in the code.
> If you’re using a function expression, you must do so before the function is used
*/

console.log(test()); // 'hello'
function test() {
	return 'hello';
}