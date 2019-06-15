/*

!!BASIC - FUNCTIONS - FUNCTION DECLARATIONS & FUNCTION EXPRESSIONS!!

> Start thinking about functions as values, just like numbers, strings, booleans or objects. 
> The thing that really makes a function value different from these other values is that we 
can invoke it


BROWSER BEHAVIOUR:
1) browser find all function declarations, grab the function and stash it away so I can 
retrieve it later when the function is invoked
2) browser goes back up to the top of your code and starts executing it, top to bottom
3) browser creates variables & variables that store function expressions
	> grab the function and stash it away so it can retrieve it later when the function is invoked
	> because this is a function expression it needs to create a reference to this new function
	> assign that function to the corresponding (fly) variable
4) execute the function (quack) & for condition
5) execute the function expression (fly) & for condition
	> fly variable is a reference to the function

*/

/*
1) function declaration
	> can be used to reference and invoke the function
2) function expression
	> the function doesn’t have a name, and it’s on the right
	hand side of an assignment to a variable
	> it is a a reference that refers to a function
		>> You can use a function reference to invoke a function
		or, you can assign them to variables, store them in objects, 
		and pass them to or return them from functions 
		(just like object references)
3) asigning values (cute code)
	> references are references, no matter how you create them 
	(that is, with a declaration or an expression)!
*/
var migrating = true;


1)
function quack(num) {
	for (var i = 0; i < num; i++) {
		console.log("Quack!");
	}
}

2)
var fly = function(num) {
	for (var i = 0; i < num; i++) {
		console.log("Flying!");
	}
};


if (migrating) {
	quack(4);
	fly(4);
}


3)
var superFly = fly;
superFly(2);

var superQuack = quack;
superQuack(3);


/*
FUNCTION EXPRESSIONS
> Computer scientists actually have a term for these kinds of values: 
	>> they’re called first class values. 
	
	> Here’s what you can do with a first class value:
		+) Assign the value to a variable 
		(or store it in a data structure like an array or object)
		+) Pass the value to a function
		+) Return the value from a function
*/


/*
PASS FUNCTIONS TO FUNCTIONS
> we have a passenger list & values 
*/
var passengers = [ 
	{ name: "Jane Doloop", paid: true, ticket: "coach" },
	{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
	{ name: "Sue Property", paid: false, ticket: "firstclass" },
	{ name: "John Funcall", paid: true, ticket: "coach" }
];

/*
1) Instead of (redundant code):
2) Write like this (more reusable):
*/
1)
function checkPaid(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		if (!passengers[i].paid) {
			return false;
		}
	}
	return true;
}

function checkNoFly(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		if (onNoFlyList(passengers[i].name)) {
			return false;
		}
	}
	return true;
}

function printPassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		console.log(passengers[i].name);
		return false;
	}
	return true;
}

2)
/*Function has two parameters: 
1) array of passengers, 
2) function that knows how to look for some condition in the passengers*/
function processPassengers(passengers, testFunction) {
	/*We iterate through all the passengers, one at a time*/
	for (var i = 0; i < passengers.length; i++) {
		/*And then we call the function on each passenger*/
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;
}
/*function to check to see if a passenger is on the no-fly list*/
function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}
/*function to check to see if a passenger has paid.*/
function checkNotPaid(passenger) {
	return (!passenger.paid);
}

/*Passing a function to a function*/
var allCanFly = processPassengers(passengers, checkNoFlyList);

if(!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}


var allPaid = processPassengers(passengers, checkNotPaid);

if(!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}



/*
RETURN FUNCTIONS FROM FUNCTIONS
1) instead of this
	>> problem: we have multiple classes
2) 
*/
1)
function serveCustomer(passenger) {
	if (passenger.ticket === "firstclass") {
		alert("Would you like a cocktail or wine?");
	} else {
		alert("Your choice is cola or water.");
	}
	// get dinner order
	// pick up trash
}


2)
/*Here's the new createDrinkOrder. 
> It's going to return a function that knows how to take a drink order*/
function createDrinkOrder(passenger) {
	/*create a variable to hold the function we want to return*/
	var orderFunction;
	
	if(passenger.ticket === "firstclass") {
		/*If the passenger is first class, we create a function that knows how 
		to take a first class order*/
		orderFunction = function() {
			alert("Would you like a cocktail or wine?");
			};
	} else {
		/*Otherwise create a function to take an coach class order*/
		orderFunction = function() {
			alert("Your choice is cola or water.");
			};
	}
	/*And return the function.*/
	return orderFunction;
}

function serveCustomer(passenger) {
	/*getDrinkOrder now returns a function, which we store in the 
	getDrinkOrderFunction variable*/
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	
	/*We use the function we get back from createDrinkOrder whenever
	we need to get a drink order for this passenger.*/
	getDrinkOrderFunction();
	// get dinner order
	getDrinkOrderFunction();
	getDrinkOrderFunction();
	// show movie
	getDrinkOrderFunction();
	// pick up trash
}


/*Write a quick function to iterate over all the passengers and call serveCustomer for each passenger*/
function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}

servePassengers(passengers);
