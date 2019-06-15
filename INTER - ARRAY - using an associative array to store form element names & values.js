/*

!!INTER - ARRAY - USING AN ASSOCIATIVE ARRAY TO STORE FORM ELEMENT NAMES & VALUES!!

> want to store form element names and values for later validation purposes

*.forms.elements - elements collection returns a collection of all elements in a form
*.value - 	sets or returns the value of the option (the value to be sent to the server
			when the form is submitted)
*.keys() - returns an array of a given object's own enumerable properties
*.forEach() - calls a provided function once for each element in an array
*.getElementById() - returns the element that has the ID attribute with the specified value
*.addEventListener() - attaches an event handler to the document (click)
*.preventDefault() - stops the default action of an element from happening
*.innerHTML - sets or returns the HTML content (inner HTML) of an element

*/

/*
SOLUTION STEPS:
1) Use an associative array to store the elements, using the element identifiers as 
array index
2) Iterate over the array using a combination of keys() and forEach()
*/
1)
var elemArray = new Object(); // notice Object, not Array
var elem = document.forms[0].elements[0];
elemArray[elem.id] = elem.value;

2)
Object.keys(elemArray).forEach(
	function(key) {
		var value = elemArray[key];
		console.log(value);
	}
);


/*
EXAMPLE:
+) demonstrating associative array with form elements
*/
+) HTML
<form id="picker">
<label>Value 1:</label> <input type="text" id="first" /><br />
<button id="validate">Validate</button>
<div id="result"></div>

+) JavaScript
// get the form element names and values and validate
document.getElementById("validate").addEventListener("click",
	function(evnt) {
		evnt.preventDefault();
		
		// create array of element key/values
		var elems = document.getElementById("picker").elements;
		var elemArray = new Object();
		for(var i = 0; i < elems.length; i++) {
			if(elems[i].type == "text") {
				elemArray[elems[i].id] = elems[i].value;
			}
		}
		
		var str = "";
		Object.keys(elemArray).forEach(
			function(key) {
				var value = elemArray[key];
				str += key + "->" + value + "<br />";
			}
		);
		
		document.getElementById("result").innerHTML = str;
	},
	false
);
