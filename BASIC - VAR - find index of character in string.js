/*

!!BASIC - VAR - FIND INDEX NUMBER OF CHARACTER IN STRING!!

> length property holds the number of characters in the string
	>> quite handy for iterating through the characters of the string

	
*.lenght - Return the number of characters in a string
*.charAt - Return the first character of a string
	
*/

var input = "jenny@wickedlysmart.com";

for(var i = 0; i < input.length; i++) {
	if(input.charAt(i) === "@") {
		console.log("There's an @ sign at index number " + i);
	}
}
// There's an @ sign at index number 5