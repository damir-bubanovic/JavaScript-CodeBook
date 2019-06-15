/*

!!BASIC - OBJECTS - ARRAY OBJECTS!!

*/

/*You can create arrays using a constructor too*/
var emptyArray = new Array();

/*We can add items to it*/
emptyArray[0] = 99;

/*Create array objects that have a specific size (3 elements)*/
var oddNumbers = new Array(3);

oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;


/*This reverses all the values in the array*/
oddNumbers.reverse();

/*The join method creates a string from the values in oddNumbers placing a 
“ - ” between the values, and returns that string. So this returns the string 
“5 - 3 - 1”.*/
var aString = oddNumbers.join(" - ");

/*The every method takes a function and tests each value of the array to see if 
the function returns true or false when called on that value. If the function 
returns true for all the array items, then the result of the every method is true.*/
var areAllOdd = oddNumbers.every(	function(x) {
										return ((x % 2) !== 0);
									}
);


/*Create array - using the constructor*/
var items = new Array("a", "b", "c");

/*The constructor comes in handy when you need to create an array of a specific 
size you determine at runtime, and then add items to it later*/
var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array(n);

for(var i=0; i < n; i++) {
	widgets[i] = getDatabaseRecord(i);
}