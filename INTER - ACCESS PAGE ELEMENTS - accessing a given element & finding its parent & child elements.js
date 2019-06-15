/*

!!INTER - ACCESS PAGE ELEMENTS - ACCESSING A GIVEN ELEMENT & FINDING ITS PARENT & CHILD ELEMENTS!!

> You want to access a specific web page element, and then find its parent and child
elements

*.getElementById() - returns the element that has the ID attribute with the specified value
*.parentNode - returns the parent node of the specified node, as a Node object
*.childNodes - returns a collection of a node's child nodes, as a NodeList object
*.hasChildNodes() - returns true if the specified node has any child nodes, otherwise false
*.nodeName - returns the name of the specified node

*/

/*
SOLUTION STEPS:
>) element

1) Use document.getElementById() to get a reference to the specific element
2) Find its parent via the parentNode property
3) Find its children via the childNodes property
*/
>)
<div id="demodiv">
	<p>This is text.</p>
</div>

1)
var demodiv = document.getElementById("demodiv");
2)
var parent = demodiv.parentNode;
3)
var children = demodiv.childNodes;


/*
EXAMPLE:
>) The returned element object has a set of methods and properties, including several
inherited from the node object. The node methods are primarily associated with traversing
the document tree. 
	1) to find the parent node for the element, use the following
	
2) You can find out the type of element for each node through the nodeName property

3) If you want to find out what children an element has, you can traverse a collection of
them via a NodeList, obtained using the childNodes property
*/
1)
var parent = document.getElementById("demodiv").parentNode; // parent node

2)
var type = parent.nodeName; // BODY

3)
var demodiv = document.getElementById("demodiv");
var outputString = "";

if(demodiv.hasChildNodes()) {
	var children = demodiv.childNodes;
	
	for(var i = 0; i < children.lenght; i++) {
		outputString += "has child " + children[i].nodeName + " ";
	}
}
console.log(outputString);