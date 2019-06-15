/*

!!BASIC - VAR - SEARCH STRING FOR MATCH OF A SUBSTRING!!

*.match - The match() method searches a string for a match against a 
			regular expression, and returns the matches, as an Array object
	> string.match(regexp)

*/

/*Search a string for "ain"*/
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);

/*The result of res will be an array with the values*/
ain,ain,ain


/*Perform a global, case-insensitive search for "ain"*/
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/gi);

/*The result of res will be:*/
ain,AIN,ain,ain