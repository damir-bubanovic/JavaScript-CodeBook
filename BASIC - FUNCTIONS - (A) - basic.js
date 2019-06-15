/*

!!FUNCTIONS - BASIC!!

> You can put your functions anywhere in your JavaScript file

> Remember, when you return from a function, the function stops executing,
so any lines of code after the return are ignored

> JavaScript actually makes two passes over your page: 
	1) in the first pass it reads all the function definitions,
	2) and in the second it begins executing your code. 
	>> So, that allows you to place functions anywhere in your file

> It’s just good programming practice to use local variables unless you absolutely need globals
	>> do you need variables that are accessable for multiple functions or only one function

*/

/*
GOOD CODING PRACTICES:
1) Global variables, right at the TOP!
2) Functions like to sit together.
3) Let your local variables be declared at the TOP of the function they’re in.
*/

/*
BASIC CODE:
*/
function functionName(argument1, argument2) {
	/*execute code here....*/
}

functionName("Marko", 34);


/*
EXAMPLE:
*/
/*cupa & tea = parameters*/
function makeTea(cups, tea) {
	document.write("Brewing " + cups + " cups of " + tea);
}

var guests = 3;
/*guests & Earl Grey = arguments*/
makeTea(guests, "Earl Grey");
// Brewing 3 cups of Earl Grey


/*
1) EXPERIMENT #1: what happens when we don’t pass enough arguments
	>> each parameter that doesn’t have a matching argument is set to undefined

2) EXPERIMENT #2: what happens when we pass too many argments
	>> JavaScript just ignores the extra
	
3) EXPERIMENT #3: what happens when we have NO parameters
	>> No worries, many functions have no parameters
*/
1)
function makeTea(cups, tea) {
	console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);
// Brewing 4 cups of undefined

2)
function makeTea(cups, tea) {
	console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3, "Earl Grey", "hey ma!", 42);
// Brewing 3 cups of Earl Grey

3)
function barkAtTheMoon() {
	console.log("Woooooooooooooo!");
}
barkAtTheMoon();
// Woooooooooooooo!


/*
EXAMPLe - RETURN VALUES
*/
function animalSounds(animal) {
	/*Always declare empty local variable*/
	var message;
	
	/*This means variable is global - do not do this if meant to be local variable*/
	message;
	
	if(animal == "Dog") {
		message = "Woof";
	} else if(animal == "Cat") {
		message = "Miau";
	} else {
		message = "Groargh";
	}
	
	return message;
}

document.write(animalSounds("Dog"));
// Woof


/*
EXAMPLE - COMPLICATED
	> follow the number logic
*/
function calculateArea(r) {		// 3
	var area;
	if(r <= 0) {	// 4
		return 0;	// 5
	} else {	// 6
		area = Math.PI * r * r;	// 7
		return area;	// 8
	}
}

var radius = 5.2;	// 1
var theArea /*9*/ = calculateArea(radius); /*2*/
console.log("The area is: " + theArea);	// 10
// The area is: 84.94866535306801


/*
GLOBAL & LOCAL VARIABLES
	> standard global is outside of function, local is inside function
*/

