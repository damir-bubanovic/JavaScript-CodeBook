/*

!!INTER - ACCESS PAGE ELEMENTS - SETTING AN ELEMENTS STYLE ATTRIBUTE!!

> want to add or replace a style setting on a specific web page element

*.setAttribute() - adds the specified attribute to an element, and gives it the specified value
*.createAttribute() - 	creates an attribute with the specified name, and returns the attribute 
						as an Attr object
*.nodeValue - sets or returns the node value of the specified node
*.getElementById() - returns the element that has the ID attribute with the specified value
*.getComputedStyle() - gets all the actual (computed) CSS property and values of the specified element
*.getPropertyValue() - returns the value of the specified style property

*/

/*
SOLUTION:
1) To change one CSS property, modify the property value via the element’s style property
>) If the CSS property contains a hyphen, such as font-family or background-color, use
the CamelCase notation for the property
	>> The CamelCase notation removes the dash, and capitalizes the first letter following 
	the dash

2) To modify one or more CSS properties for a single element, you can use setAttribute() 
and create an entire CSS style rule

3) You can predefine the style rule, assign it a class name, and set the class property
for the element
*/
1)
elem.style.backgroundColor="red";

2)
elem.setAttribute("style", "background-color: red; color: white; border: 1px solid black");

3)
.stripe{
	background-color: red;
	color: white;
	border: 1px solid black;
}

elem.setAttribute("class", "stripe");


/*
EXAMPLE:
+) Rather than using setAttribute() to add or modify the attribute, you can create an
attribute and attach it to the element using createAttribute() to create an Attr node,
set its value using the nodeValue property, and then use setAttribute() to add the
attribute to the element
*/
+)
var styleAttr = document.createAttribute("style");
styleAttr.nodeValue = "background-color: red";
someElement.setAttribute(styleAttr);


/*
EXAMPLE - Accessing an Existing Style Setting
>) using setAttribute(), use getAttribute()

+) Getting a computed CSS property that works cross-browser
*/
>)
var className = document.getElementById("elem1").getAttribute("class");

+) HTML
<div id="test"><p>Hi</p></div>

+) CSS
#test {
	background-color: red;
	width: 100px;
	height: 100px;
}

+) JavaScript
var elem = document.getElementById("test");
var bkcolor =   elem.currentStyle ? elem.currentStyle["backgroundColor"] :
				window.getComputedStyle(elem).getPropertyValue("background-color");
console.log(bkcolor);