/*

!!INTER - ACCESS PAGE ELEMENTS - ACCESSING ALL IMAGES IN THE WEB PAGE!!

> You want to access all img elements in a given document

*.getElementsByTagName() - 	returns a collection of all elements in the document 
							with the specified tag name, as a NodeList object
*let - declares a block scope local variable, optionally initializing it to a value
*.createElement() - creates an Element Node with the specified name
*.appendChild() - appends a node as the last child of a node

*/

/*
SOLUTION:
1) Use the document.getElementsByTagName() method, passing in img as the parameter

2) The collection of images can be traversed like an array, and the order of nodes 
is based on the order of the elements within the document
*/
1)
var imgElements = document.getElementsByTagName('img');

2)
var imgElements = document.getElementsByTagName('img');

for(let i = 0; i < imgElements.length; i++) {
	var img = imgElements[i];
	...
}


/*
EXAMPLE:
+) Demonstrating getElementsByTagName and the NodeList live collection property


>) pass the universal selector (*) as a parameter to the method to get all elements
*/
+) HTML
<p><img src="firstimage.jpg" alt="image description" /></p>
<p><img src="secondimage.jpg" alt="image description" /></p>
<p><img src="thirdimage.jpg" alt="image description" /></p>

+) JavaScript
var imgs = document.getElementsByTagName("img");
console.log(imgs.length);

var p = document.createElement("p");
var img = document.createElement("img");
img.src = "something.jpg";
p.appendChild(img);

var paras = document.getElementsByTagName("p");
paras[0].parentNode.appendChild(p);

console.log(imgs.length);


>)
var allelems = document.getElementsByTagName('*');