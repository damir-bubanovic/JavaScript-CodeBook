/*

!!BASIC - DOM - CHANGE CSS RULES!!

> getElementById - get single unique id element
> getElementsByClassName - get elements by class name
> getElementsByTagName - all elements that match the tag name

> When you’re dealing with the DOM it’s important to
execute your code only after the page is fully loaded
	>> at the bottom of the body element!!!

*/

/*
CHANGE CSS
1) unique id
2) select it with CSS to style it
3) access this element through its id in JavaScript
*/
1)
<div id="menu">
	...
</div>

2)
div#menu {
	color: #aaa;
}

3)
var myMenu = document.getElementById("menu");
myMenu.style.color = "red"; /* OR -> "#FF0000"*/ 

/*
OR
1) set class & all its atributes
> change class $ its attributes
*/
1)
var planet = getElementById("greenplanet");
planet.setAttribute("class", "redtext");




/*
CSS - change many elements
*/
var myElements = document.getElementsByClassName(".bar");
 
for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 0;
}



/*
CSS - add & remove classes
> get rid of query for now

1) To add the disableMenu class name to our dropDown element, use the add method on the 
HTML element's classList property
2) To remove the the disableMenu class name, we can call the classList API's remove method
*/
1)
var theDropDown = document.getElementsByClassName("#dropDown");
theDropDown.classList.add("disableMenu");

2)
var theDropDown = document.getElementsByClassName("#dropDown");
theDropDown.classList.remove("disableMenu");



/*
1) WHAT IS THE VALUE OF AN ATTRIBUTE IN AN ELEMENT
	2) if attribute doesn’t exist in the element, you get NULL (Test this)
*/
1)
var scoop = document.getElementById("raspberry");
var altText = scoop.getAttribute("alt");
console.log("I can't see the image in the console,");
console.log(" but I'm told it looks like: " + altText);

2)
var altText = scoop.getAttribute("alt");
if (altText == null) {
	console.log("Oh, I guess there isn't an alt attribute.");
} else {
	console.log("I can't see the image in the console,");
	console.log(" but I'm told it looks like " + altText);
}

