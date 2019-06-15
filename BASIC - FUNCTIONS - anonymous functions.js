/*

!!BASIC - FUNCTIONS - ANONYMOUS FUNCTIONS!!

> Functions that don’t have names
> By using anonymous functions we can often make our code less verbose,
more concise, more readable, more efficient, and even more maintainable

> Anonymous function expressions are used frequently in JavaScript code, 
so if you want to be able to read other people’s code, or understand 
JavaScript libraries

> Remember that JavaScript functions are always evaluated in the same scoping environment 
in which they were defined. 
	>> Within a function, if you want to determine where a variable is coming from (local or global), 
	search in its enclosing functions, from the most nested to the least

*/

/*
EXAMPLE:
1) instead of this
2) use anonymous function
*/
1)
function handler() { 
	alert("Yeah, that page loaded!"); 
}

window.onload = handler;

2)
window.onload = function() { 
					alert("Yeah, that page loaded!"); 
				};
				
/*
EXAMLE:
1) instead of this
2) use anonymous function
*/
1)
function cookieAlarm() {
	alert("Time to take the cookies out of the oven");
};

setTimeout(cookieAlarm, 600000);

2)
setTimeout(	function() { 
				alert("Time to take the cookies out of the oven");
			}, 
			600000
);



/*
NESTED FUNCTIONS
> those are functions defined within other functions
	>> it affects the scope of those functions
> Functions defined at the top level of your code have global scope,
whereas functions defined within another function have local scope

RULES:
> within a function, if you define a nested function with a declaration,
that nested function is defined everywhere within the body of the function. 
> if you create a nested function using a function expression, then that 
nested function is defined only after the function expression is evaluated
*/
var migrating = true;


var fly = function(num) {
	var sound = "Flying";
	
	/*adding a function declaration with the name wingFlapper 
	inside the fly function expression*/
	function wingFlapper() {
		console.log(sound);
	}
	
	/*calling wingFlapper function*/
	for (var i = 0; i < num; i++) {
		wingFlapper();
	}
};


function quack(num) {
	var sound = "Quack";
	
	/*adding a function expression assigned to the quacker 
	variable inside the quack function declaration*/
	var quacker = function() {
		console.log(sound);
	};
	
	/*calling quacker function*/
	for (var i = 0; i < num; i++) {
		quacker();
	}
}


if (migrating) {
	quack(4);
	fly(4);
}


/*
CLOSURES
> A closure results when we combine a function that has free variables with
an environment that provides variable bindings for all those free variables

1) instead of this
2) use this
3) Creating a closure with an event handler
	>> Closures are often used to capture state for event handlers
*/
1)
var count = 0;

function counter() {
	count = count + 1;
	return count;
}

2)
function makeCounter() {
	var count = 0;
	
	function counter() {
			count = count + 1;
			return count;
	}
	return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

3)
window.onload = function() {
	var count = 0;
	var message = "You clicked me ";
	
	var div = document.getElementById("message");
	var button = document.getElementById("clickme");
	
	button.onclick = 	function() {
							count++;
							div.innerHTML = message + count + " times!";
						};
};
