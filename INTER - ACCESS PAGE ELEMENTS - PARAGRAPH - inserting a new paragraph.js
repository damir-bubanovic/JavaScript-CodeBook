/*

!!INTER - ACCESS PAGE ELEMENTS - INSERTING A NEW PARAGRAPH!!

> want to insert a new paragraph just before the third paragraph within a div element

*.getElementById() - returns the element that has the ID attribute with the specified value
*.getElementsByTagName() - 	returns a collection of all elements in the document with 
							the specified tag name, as a NodeList object
*.createElement() - creates an Element Node with the specified name
*.insertBefore() - inserts a node as a child, right before an existing child, which you specify
*.appendChild() - appends a node as the last child of a node

*/

/*
SOLUTION:
+) Use some method to access the third paragraph, such as getElementsByTagName(), to
get all of the paragraphs for a div element. Then use the createElement() and insert
Before() DOM methods to add the new paragraph just before the existing third
paragraph
*/
+)
// get the target div
var div = document.getElementById("target");

// retrieve a collection of paragraphs
var paras = div.getElementsByTagName("p");

// if a third para exists, insert the new element before
// otherwise, append the paragraph to the end of the div
var newPara = document.createElement("p");
if(paras[3]) {
	div.insertBefore(newPara, paras[3]);
} else {
	div.appendChild(newPara);
}