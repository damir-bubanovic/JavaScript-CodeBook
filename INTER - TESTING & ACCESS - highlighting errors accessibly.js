/*

!!INTER - TESTING & ACCESS - HIGHLIGHTING ERRORS ACCESSIBLY!!

> You want to highlight form field entries that have incorrect data, and you want to ensure
the highlighting is effective for all web page users

*.getElementById() - returns the element that has the ID attribute with the specified value
*.onchange - event occurs when the value of an element has been changed
*.setAttribute() - adds the specified attribute to an element, and gives it the specified value
*.onclick - event occurs when the user clicks on an element
*.onblur - event occurs when an object loses focus
*.onsubmit - event occurs when a form is submitted
*.removeChild() - removes a specified child node of the specified element
*.removeAttribute() - removes the specified attribute from an element
*.createTextNode() - creates a Text Node with the specified text
*.createElement() - creates an Element Node with the specified name
*.appendChild() - appends a node as the last child of a node
*.resetField() - reset a particular form field

*/

/*
SOLUTION:
1) Use CSS to highlight the incorrectly entered form field, and use WAI-ARIA (Accessible
Rich Internet Applications) markup to ensure the highlighting is apparent to all users

2) For the fields that need to be validated, assign a function to the form field’s onchange
event handler that checks whether the field value is valid. If the value is invalid, pop up
an alert with information about the error at the same time that you highlight the field

3) For the fields that need a required value, assign a function to the field’s onblur event
handler that checks whether a value has been entered


> If any of the validation checks are performed as part of the form submission, make sure
to cancel the submission event if the validation fails

> Read more on WAI-ARIA at the Web Accessibility Initiative at the W3C. I recommend using NV Access, 
an open source, freely available screen reader, for testing whether your application is responding
as you think it should with a screen reader
*/
1)
[aria-invalid] {
	background-color: #ffeeee;
}

2)
document.getElementById("elemid").onchange = validateField;
...

function validateField() {
	// check for numbers
	if(isNaN(this.value)) {
		this.setAttribute("aria-invalid", "true");
		generateAlert("You entered an invalid value for A. Only numeric values such as 105 or 3.54 are allowed");
	}
}

3)
document.getElementById("field").onblur = checkMandator;
...

function checkMandatory() {
	// check for data
	if(this.value.lenght == 0) {
		this.setAttribute("aria-invalid", "true");
		generateAlert("A value is required in this field");
	}
}


/*
EXAMPLE:
+) Providing visual and other cues when validating form fields
*/
+) HTML
<form id="testform">

	<div><label for="firstfield">*First Field:</label><br />
		<input id="firstfield" name="firstfield" type="text" aria-required="true" required />
	</div>
	
	<div><label for="secondfield">Second Field:</label><br />
		<input id="secondfield" name="secondfield" type="text" />
	</div>
	
	<div><label for="thirdfield">Third Field (numeric):</label><br />
		<input id="thirdfield" name="thirdfield" type="text" />
	</div>
	
	<div><label for="fourthfield">Fourth Field:</label><br />
		<input id="fourthfield" name="fourthfield" type="text" />
	</div>
	
	<input type="submit" value="Send Data" />
</form>

+) CSS
[aria-invalid] {
	background-color: #ffeeee;
}

[role="alert"] {
	background-color: #ffcccc;
	font-weight: bold;
	padding: 5px;
	border: 1px dashed #000;
}

div {
	margin: 10px 0;
	padding: 5px;
	width: 400px;
	background-color: #ffffff;
}

+) JavaScript
document.getElementById("thirdfield").onclick = validateField;
document.getElementById("firstfield").onblur = mandatoryField;
document.getElementById("testform").onsubmit = finalCheck;

function removeAlert() {
	var msg = document.getElementById("msg");
	
	if(msg) {
		document.body.removeChild(msg);
	}
}

function resetField(elem) {
	elem.parentNode.setAttribute("style","background-color: #ffffff");
	var valid = elem.getAttribute("aria-invalid");
	
	if(valid) {
		elem.removeAttribute("aria-invalid");
	}
}

function badField(elem) {
	elem.parentNode.setAttribute("style", "background-color: #ffeeee");
	elem.setAttribute("aria-invalid", "true");
}

function generateAlert(txt) {
	// create new text and div elements and set
	// Aria and class values and id
	var txtNd = document.createTextNode(txt);
	msg = document.createElement("div");
	msg.setAttribute("role", "alert");
	msg.setAttribute("id","msg");
	msg.setAttribute("class","alert");
	
	// append text to div, div to document
	msg.appendChild(txtNd);
	document.body.appendChild(msg);
}

function validateField() {
	// remove any existing alert regardless of value
	removeAlert();
	
	// check for number
	if(!isNaN(this.value)) {
		resetField(this);
	} else {
		badField(this);
		generateAlert("You entered an invalid value in Third Field. " +
		"Only numeric values such as 105 or 3.54 are allowed");
	}
}

function mandatoryField() {
	// remove any existing alert
	removeAlert();
	
	// check for value
	if(this.value.length > 0) {
		resetField(this);
	} else {
		badField(this);
		generateAlert("You must enter a value into First Field");
	}
}

function finalCheck() {
	removeAlert();
	
	var fields = document.querySelectorAll("[aria-invalid='true']");
	if(fields.length > 0) {
		generateAlert("You have incorrect fields entries that must be fixed " +
		"before you can submit this form");
		return false;
	}
}
