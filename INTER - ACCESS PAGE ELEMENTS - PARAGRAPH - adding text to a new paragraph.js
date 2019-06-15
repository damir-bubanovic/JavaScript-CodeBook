/*

!!INTER - ACCESS PAGE ELEMENTS - PARAGRAPH - Adding Text to a New Paragraph!!

> You want to create a new paragraph with text and insert it just before the second paragraph
within a div element

*.getElementById() - returns the element that has the ID attribute with the specified value
*.getElementsByTagName() - 	returns a collection of all elements in the document with the 
							specified tag name, as a NodeList object
*.createTextNode() - creates a Text Node with the specified text
*.createElement() - creates an Element Node with the specified name
*.appendChild() - appends a node as the last child of a node
*.insertBefore() - inserts a node as a child, right before an existing child, which you specify

*/

/*
SOLUTION
+) below
*/
+)
// use getElementById to access the div element
var div = document.getElementById("target");

// use getElementsByTagName and the collection index
// to access the second paragraph
var oldPara = div.getElementsByTagName("p")[1]; // zero based index

// create a text node
var txt = document.createTextNode("The new paragraph will contain this text");

// create a new paragraph
var para = document.createElement("p");

// append the text to the paragraph, and insert the new para
para.appendChild(txt);
div.insertBefore(para, oldPara);


/*
EXAMPLE:
+) Demonstrating various methods for adding content to a web page
*/
+) HTML
<div id="target">
<p>
	There is a language 'little known,'<br />
	Lovers claim it as their own.
</p>
...

+) JavaScript
// use getElementById to access the div element
var div = document.getElementById("target");

// get paragraph text
var txt = prompt("Enter new paragraph text", "");

// use getElementsByTagName and the collection index
// to access the first paragraph
var oldPara = div.getElementsByTagName("p")[0]; //zero based index

// create a text node
var txtNode = document.createTextNode(txt);

// create a new paragraph
var para = document.createElement("p");

// append the text to the paragraph, and insert the new para
para.appendChild(txtNode);
div.insertBefore(para, oldPara);