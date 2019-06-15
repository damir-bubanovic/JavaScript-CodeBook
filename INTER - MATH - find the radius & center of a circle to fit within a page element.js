/*

!!INTER - MATH - FIND THE RADIUS & CENTER OF A CIRCLE TO FIT WITHIN A PAGE ELEMENT!!

> Given the width and height of a page element, you need to find the center and radius
of the largest circle that fits within that page element

> Working with graphics requires us to do things such as finding the center of an element,
or finding the radius of the largest circle that will fit into a rectangle (or largest 
rectangle that can fit in a circle).

*Math.min - returns the smallest of zero or more numbers
*.onload - execute a JavaScript immediately after a page has been loaded
*.onresize - execute a JavaScript when the browser window is resized
*.getElementById() - get the element with the specified ID
*.getComputedStyle() - gets all the actual (computed) CSS property and values of the specified element
*.getPropertyValue() - returns the value of the specified style property
*.setAttribute() - adds the specified attribute to an element, and gives it the specified value

*/

/*
SOLUTION:
1) Find the smaller of the width and height; divide this by 2 to find the radius:
2) Given the page element’s width and height, find the center by dividing both by 2:
*/
1)
var circleRadius = Math.min(elementWidth, elementHeight) / 2;

2)
var x = elementWidth / 2;
var y = elementHeight / 2;


/*
EXAMPLe:
+) Fitting a SVG circle into a div element
*/
+) HTML
<div id="elem">
	<svg width="100%" height="100%">
		<circle id="circ" width="10" height="10" r="10" fill="red" />
	</svg>
</div>

+) CSS
#elem {
	width: 600px;
	height: 400px;
	border: 1px solid black;
}

+) JavaScript
window.onload = window.onresize = function() {
	var box = document.getElementById("elem");
	var style = window.getComputedStyle(box, null);
	
	var height = parseInt(style.getPropertyValue("height"));
	var width = parseInt(style.getPropertyValue("width"));
	var x = width / 2;
	var y = height / 2;
	
	var circleRadius = Math.min(width,height) / 2;
	
	var circ = document.getElementById("circ");
	circ.setAttribute("r", circleRadius);
	circ.setAttribute("cx", x);
	circ.setAttribute("cy", y);
};
