/*

!!INTER - VAR - FINDING & HIGHLIGHTING ALL INSTANCES OF A PATTERN!!

> want to find all instances of a pattern within a string

*.exec - returns the matched text if it finds a match, otherwise it returns null
*.onclick - execute a JavaScript when a button is clicked
*.getElementById - returns the element that has the ID attribute with the specified value
*.value - value property sets or returns the value of the option
*<pre> 	- defines preformatted text
		- element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks
*.substring() - extracts the characters from a string, between two specified indices, and returns the new sub string
*.innerHTML - sets or returns the HTML content (inner HTML) of an element

*/

/*
SOLUTION:
> Use the RegExp exec method and the global flag (g) in a loop to locate all instances 
of a pattern, such as any word that begins with t and ends with e, with any number of
characters in between

> The RegExp exec() method executes the regular expression, returning null if a match
is not found, or an object with information about the match, if found.
*/

var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;
var str = "";

// check for pattern with regexp exec, if not null, process
while((matchArray = pattern.exec(searchString)) != null) {
	str += "at " + matchArray.index + " we found " + matchArray[0] + "\n";
}
console.log(str);
/*
at 7 we found the
at 11 we found time
at 28 we found the
at 32 we found time
at 49 we found the
at 53 we found time
*/


/*
EXAMPLE:
> Using exec and global flag to search and highlight all matches in a text string
*/
+) HTML
<textarea id="incoming" cols="150" rows="10">
<input id="pattern" type="text" />
<button id="searchSubmit">Search for pattern</button>
<div id="searchResult"></div>

+) CSS
.found {
	background-color: #ff0;
}

+)
document.getElementById("searchSubmit").onclick = function() {
	
	// get pattern
	var pattern = document.getElementById("pattern").value;
	var re = new RegExp(pattern, "g");
	
	// get string
	var searchString = document.getElementById("incoming").value;
	var matchArray;
	var resultString = "<pre>";
	var first = 0;
	var last = 0;
	
	
	// find each match
	while((matchArray = re.exec(searchString)) != null) {
		
		last = matchArray.index;
		
		// get all of string up to match, concatenate
		resultString += searchString.substring(first, last);
		
		// add matched, with class
		resultString += "<span class='found'>" + matchArray[0] + "</span>";
		first = re.lastIndex;
	}
	
	
	// finish off string
	resultString += searchString.substring(first, searchString.length);
	resultString += "</pre>";
	
	// insert into page
	document.getElementById("searchResult").innerHTML = resultString;
}
