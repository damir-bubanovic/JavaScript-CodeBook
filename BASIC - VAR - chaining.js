/*

!!BASIC - VAR - CHAINING!!

> is really just a shorthand for a longer series of steps to access 
properties and methods of objects (and arrays)

*/

/*
EXAMPLE:
1) Here's a ship object
2) We were grabbing the locations array from the ship
3) And then using it to access the indexOf method

OR - simple

4) Chaining
	> Evaluates to the ship object, Which has a locations property, 
	which is an array, Which has a method named indexOf
*/
1)
var ship = { locations: ["06", "16", "26"], hits: ["", "", ""] };
2)
var locations = ship.locations;
3)
var index = locations.indexOf(guess);

4)
ship.locations.indexOf(guess);