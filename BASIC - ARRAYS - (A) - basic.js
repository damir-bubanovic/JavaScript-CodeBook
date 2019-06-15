/*

!!BASIC - ARRAYS - BASIC!!

> you’ll want to limit your arrays to reasonable sizes—say a few 
array items hundred—most of the time

> it’s a lot easier and safer if you just use the same type for all the 
values in your arrays

> if you try to access an array with an index number that is too big or
too small (not in array) you get undefined

> The for loop is commonly used to iterate through arrays
> The while loop is most often used when you don’t know how many times you
need to loop, and you’re looping until a condition is met

*/

/*
BASIC CODE:
*/
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

/*Work with arrays*/
var solution2 = scores[2];
alert("Solution 2 produced " + solution2 + " bubbles.");
// Solution 2 produced 60 bubbles

/*Update array*/
scores[2] = 70;

/*Empty array*/
var names = [ ];

/*Get the last item in array*/
myArray[myArray.length - 1];


/*
EXAMPLE:
> word generator
> Math.floor(Math.random() * names.length) -> generates integers between 0 - 3 !!
*/
function makeWords() {
	var names = ["Nikola", "Ana", "Velko", "Prika"];
	var actions = ["cooks", "leaves", "eats", "demolishes", "talks to"];
	var objects = ["kitty kat", "my dog", "homeless dude", "population of Liberia"];
	var randNames = Math.floor(Math.random() * names.length);
	var randActions = Math.floor(Math.random() * actions.length);
	var randObjects = Math.floor(Math.random() * objects.length);
	
	document.write(names[randNames] + " " + actions[randActions] + " " + objects[randObjects] + "!");
}

makeWords();



/*
EXAMPLE - CHECK FOR UNDEFINED VALUES
*/
if (myArray[i] == undefined) {
	/*Code goes here*/
}



/*
EXAMPLE
*/
var products = [
	"Choo Choo Chocolate",
	"Icy Mint", 
	"Cake Batter",
	"Bubblegum"
];

var hasBubbleGum = [
	false,
	false,
	false,
	true
];


for(var i = 0; i < hasBubbleGum.length; i++) {
	if(hasBubbleGum[i] == true) { // or you can just write hasBubbleGum[i] (not need for == true)
		document.write(products[i] + " contains bubble gum");
	}
}
/*
SLOWER EXAMPLE:

var i = 0;
while(i < scores.length) {
	var output = "Bubble solution #" + i + " score: " + scores[i] + "<br />";
	document.write(output);
	i = i + 1;
}

*/