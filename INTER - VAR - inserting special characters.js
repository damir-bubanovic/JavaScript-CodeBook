/*

!!INTER - VAR - INSERTING SPECIAL CHARACTERS!!

> want to insert a special character, such as a line feed, into a string

*/

/*
EXAMPLE:
1) Use one of the escape sequences in the string
	>> npr. to include the copyright symbol in a block of text to be added 
	to the page, use the escape sequence \u00A9
	
	>> for a list look up -> TABLE - ESCAPE SEQUENCES
*/
1)
var newText = "<p>This page \u00A9 Shelley Powers </p>";

var oldText = document.getElementById("result");
oldText.innerHTML = newText;
// This page © Shelley Powers