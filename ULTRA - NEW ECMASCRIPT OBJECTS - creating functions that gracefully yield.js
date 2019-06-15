/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - CREATE FUNCTIONS THAT GRACEFULLY YIELD!!

> It’s simple to break out of a function with return, but you want to be able to get back
into the function at that point in the future, and then have it resume

*/

/*
SOLUTION:
+) Use an ES 6 generator function
*/
+)
function* taskRunner() {
	console.log('doing something');
	
	yield function () {
		console.log('hello from a');
	};
	
	console.log('doing something after a');
	
	yield function() {
		console.log('hello from b');
	}
	console.log('doing something after b');
}

var tasks = taskRunner();

tasks.next().value();
tasks.next().value();
tasks.next();
/*
doing something
hello from a
doing something after a
hello from b
doing something after b
*/


/*
EXAMPLE:
> As already noted, it’s easy to break out of a JavaScript function. Just type in a return
statement and you’re done. But what if you want to get back into the function at that
exact point, and have it continue
> The solution demonstrates iterating over a set of tasks, each preceded by a yield statement
with a function expression, though any expression works
*/
>)
function* idMaker(){
	var index = 0;
	while(true)
		yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2