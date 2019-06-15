/*

!!ULTRA - DATA - CREATING A LOCALSTORAGE CLIENT-SIDE DATA STORAGE ITEM!!

> You want to shadow form element entries (or any data) in such a way that users can
continue where they left off if the browser crashes, the user accidentally closes the
browser, or the Internet connection is lost

*/

/*
SOLUTION:
+) better approach, especially when you’re persisting larger amounts of data or if you 
have to support functionality when no Internet connection is present, is to use localStorage
*/
+)
var value = document.getElementById("formelem").value;
if(value) {
	localStorage.formelem = value;
}
...
// recover
var value = localStorage.formelem;
document.getElementById("formelem").value = value;


/*
EXAMPLE:
+) Using localStorage to back up form entries in case of page reload or browser crash
*/
+) HTML
<form id="inputform">
	<div>
		<label for="field1">Enter field1:</label>
		<input type="text" id="field1" />
	</div>
	
	<div>
		<label for="field2">Enter field2:</label>
		<input type="text" id="field2" />
	</div
	
	<div>
		<label for="field3">Enter field1:</label>
		<input type="text" id="field3" />
	</div>
	
	<div>
		<label for="field4">Enter field1:</label>
		<input type="text" id="field4" />
	</div>
	
	<input type="submit" value="Save" />
</form>

+)
window.onload = function() {
	var elems = document.getElementsByTagName("input");
	
	// capture submit to clear storage
	document.getElementById("inputform").onsubmit = clearStored;
	for(var i = 0; i < elems.length; i++) {
		if (elems[i].type == "text") {
			// restore
			var value = localStorage.getItem(elems[i].id);
			if (value) elems[i].value = value;
			// change event
			elems[i].onchange=processField;
		}
	}
}

// store field values
function processField() {
	localStorage.setItem(window.location.href,"true");
	localStorage.setItem(this.id, this.value);
}

// clear individual fields
function clearStored() {
	var elems = document.getElementsByTagName("input");
	for(var i = 0; i < elems.length; i++) {
		if (elems[i].type == "text") {
			localStorage.removeItem(elems[i].id);
		}
	}
}