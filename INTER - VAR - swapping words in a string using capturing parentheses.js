/*

!!INTER - VAR - SWAPPING WORDS IN A STRING USING CAPTURING PARENTHESES!!

> want to accept an input string with first and last name, and swap the names 
so the last name is first

*.onclick - execute a JavaScript when a button is clicked
*.getElementById - returns the element that has the ID attribute with the specified value
*.value - value property sets or returns the value of the option
*.replace - searches a string for a specified value, or a regular expression, and returns 
			a new string where the specified values are replaced
*.innerHTML - sets or returns the HTML content (inner HTML) of an element

*/

/*
EXAMPLE:
+) Use capturing parentheses and a regular expression to find and remember the 
two names in the string, and reverse them
	>> Look up - TABLE - STRING.REPLACE SPECIAL PATTERNS
*/
+)
var name = "Abe Lincoln";
var re = /^(\w+)\s(\w+)$/;
var newname = name.replace(re,"$2, $1");


/*
EXAMPLE:
+) Using String.replace and special pattern to find and highlight text in a
string
*/
+) HTML
<textarea id="incoming" cols="100" rows="10">
<input id="pattern" type="text" />
<button id="searchSubmit">Search for pattern</button>
<div id="searchResult"></div>

+) CSS
.found {
	background-color: #ff0;
}

+) JavaScript
document.getElementById("searchSubmit").onclick = function() {
	
	// get pattern
	var pattern = document.getElementById("pattern").value;
	var re = new RegExp(pattern, "g");
	
	// get string
	var searchString = document.getElementById("incoming").value;
	
	// replace
	var resultString = searchString.replace(re, "<span class='found'>$&</span>");
	
	// insert into page
	document.getElementById("searchResult").innerHTML = resultString;
}

/*
> This approach is handy if you want to access the capturing parentheses values, but
without having to use them within a string replacement
*/
var name = "Abe Lincoln";
var re = /^(\w+)\s(\w+)$/;
var result = re.exec(name);
var newname = result[2] + ", " + result[1];