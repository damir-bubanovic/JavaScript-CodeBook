/*

!!INTER - TABLE - SUMMING ALL NUMBERS IN A TABLE COLUMN!!

> want to sum all numbers in a table column

*.querySelectorAll - 	returns all elements in the document that matches a 
						specified CSS selector(s), as a static NodeList object
*parseFloat - 		   	parses a string and returns a floating point number
*.firstChild.data - 	returns the first child node of the specified node, as a Node object
*.createElement -		creates an Element Node with the specified name (npr. button)
*.firstChild.data - 	returns the first child node of the specified node, as a Node object
*.createTextNode - 		creates a Text Node with the specified text
*.appendChild - 		appends a node as the last child of a node

*/

/*
SOLUTION:
+) Traverse the table column containing numeric string values, convert to numbers, and
sum the numbers
*/
+)
var sum = 0;

// use querySelector to find all second table cells
var cells = document.querySelectorAll("td:nth-of-type(2)");

for(var i = 0; i < cells.length; i++) {
	sum += parseFloat(cells[i].firstChild.data);
}


/*
EXAMPLE:
+) Converting table values to numbers and summing the results

> The global functions parseInt() and parseFloat() convert strings to numbers, but
parseFloat() is more adaptable when it comes to handling numbers in an HTML table
*/
+) HTML
<table id="table1">

+) JavaScript
var sum = 0;

// use querySelector to find all second table cells
var cells = document.querySelectorAll("td + td");
for(var i = 0; i < cells.length; i++) {
	sum += parseFloat(cells[i].firstChild.data);
}

// now add sum to end of table
var newRow = document.createElement("tr");

// first cell
var firstCell = document.createElement("td");
var firstCellText = document.createTextNode("Sum:");
firstCell.appendChild(firstCellText);
newRow.appendChild(firstCell);

// second cell with sum
var secondCell = document.createElement("td");
var secondCellText = document.createTextNode(sum);
secondCell.appendChild(secondCellText);
newRow.appendChild(secondCell);

// add row to table
document.getElementById("table1").appendChild(newRow);


/*
ADDING ROWS TO TABLE PROCEDURE
1. Create a new table row using document.createElement("tr").
2. Create each table row cell using document.createElement("td").
3. Create each table row cell’s data using document.createTextNode(), passing in the
text of the node (including numbers, which are automatically converted to a string).
4. Append the text node to the table cell.
5. Append the table cell to the table row.
6. Append the table row to the table. Rinse, repeat.
*/