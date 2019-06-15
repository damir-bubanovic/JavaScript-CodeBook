/*

!!INTER - ACCESS PAGE ELEMENTS - DELETING ROWS FROM AN HTML TABLE!!

> You want to remove one or more rows from an HTML table

*.parentNode - returns the parent node of the specified node, as a Node object
*.removeChild() - removes a specified child node of the specified element
*.getElementById() - returns the element that has the ID attribute with the specified value
*.createElement() - creates an Element Node with the specified name
*.createTextNode() - creates a Text Node with the specified text
*.appendChild() - appends a node as the last child of a node
*.onclick - when the user clicks on an element
*.childNodes - returns a collection of a node's child nodes, as a NodeList object

*/

/*
SOLUTION:
+) Use the removeChild() method on an HTML table row, and all of the child elements,
including the row cells, are also removed
*/
+)
var parent = row.parentNode;
var oldrow = parent.removeChild(parent);


/*
EXAMPLE: Adding and removing table rows and associated table cells and data
*/
+) HTML
<table id="mixed">
	<tr><th>Value One</th><th>Value two</th><th>Value three</th></tr>
</table>
<div id="result"></div>

+) CSS
table {
	border-collapse: collapse;
}

td, th {
	padding: 5px;
	border: 1px solid #ccc;
}

tr:nth-child(2n+1) {
	background-color: #eeffee;
}

+) JavaScript
var values = new Array(3);
values[0] = [123.45, "apple", true];
values[1] = [65, "banana", false];
values[2] = [1034.99, "cherry", false];

var mixed = document.getElementById("mixed");
var tbody = document.createElement("tbody");

// for each outer array row
for(var i = 0 ; i < values.length; i++) {
	var tr = document.createElement("tr");
	
	// for each inner array cell
	// create td then text, append
	for(var j = 0; j < values[i].length; j++) {
		var td = document.createElement("td");
		var txt = document.createTextNode(values[i][j]);
		td.appendChild(txt);
		tr.appendChild(td);
	}
	
	// attache event handler
	tr.onclick = prunerow;
	
	// append row to table
	tbody.appendChild(tr);
	mixed.appendChild(tbody);
}

function prunerow() {
	// remove row
	var parent = this.parentNode;
	var oldrow = parent.removeChild(this);
	
	// datastring from removed row data
	var datastring = "";
	for(var i = 0; i < oldrow.childNodes.length; i++) {
		var cell = oldrow.childNodes[i];
		datastring += cell.firstChild.data + " ";
	}
	
	// output message
	var msg = document.createTextNode("removed " + datastring);
	var p = document.createElement("p");
	p.appendChild(msg);
	document.getElementById("result").appendChild(p);
}
