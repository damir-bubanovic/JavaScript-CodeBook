/*

!!INTER - TESTING & ACCESS - CREATING AN ACCESSIBLE AUTOMATICALLY UPDATED REGION!!

> You have a section of a web page that is updated periodically, such as a section that lists
recent updates to a file, or one that reflects recent Twitter activity on a subject. You want
to ensure that when the page updates, those using a screen reader are notified of the
new information

*.createElement() - creates an Element Node with the specified name
*.createTextNode() - creates a Text Node with the specified text
*.appendChild() - appends a node as the last child of a node
*.getElementById() - returns the element that has the ID attribute with the specified value
*.childNodes() - returns a collection of a node's child nodes, as a NodeList object
*.removeChild() - removes a specified child node of the specified element

*/

/*
SOLUTION:
+) Use WAI-ARIA region attributes on the element being updated
*/
+)
<ul id="update" role="log" aria-alive="polite" aria-atomic="true" aria-relevant="additions"></ul>


/*
EXAMPLE:
+) updates the web page based on the contents of a text file on the server that
the application retrieves using Ajax
	>> I modified the code that polls for the updates to check how many items have been added
	to the unordered list after the update. If the number is over 10, the oldest is removed
	from the page
	>>I made one more change, adding the ARIA roles and states to the unordered list that
	serves as the updatable live region
*/
+)
// process return
function processResponse() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var li = document.createElement("li");
		var txt = document.createTextNode(xmlhttp.responseText);
		li.appendChild(txt);
		var ul = document.getElementById("update");
		ul.appendChild(li);
		
		// prune top of list
		if (ul.childNodes.length > 10) {
			ul.removeChild(ul.firstChild);
		}
	} else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
		console.log(xmlhttp.responseText);
	}
}

<ul id="update" role="log" aria-live="polite" aria-atomic="false" aria-relevant="additions s">
