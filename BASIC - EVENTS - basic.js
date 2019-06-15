/*

!!BASIC - EVENTS - BASIC!!

> Whenever there’s an event, there is an opportunity for your code to handle it; 
that is, to supply some code that will be invoked when the event occurs

> Event - something happened

> Handlers are typically small pieces of code that know what to do when an event occurs. 
	>> In terms of code, a handler is just a function. 
	>> When an event occurs, its handler function is called

*/

/*
EXAMPLE
- .onload (event)
1) handler is just an ordinary function
	> we often refer to this as a handler or a callback
2) wire things up so the browser knows there’s a function it should 
invoke when the load event occurs
	> .onload (event) can go in head, body, or anywhere in page - tested
*/
1)
function pageLoadedHandler() {
	alert("I'm alive!");
}

2)
window.onload = pageLoadedHandler;



/*
> It can get tricky to follow the flow of execution in code with a lot of
event handlers

GENERAL GUIDELINES for EXAMPLES:
1) init function is called when the page is loaded (.onload)
2) showAnswer function isn’t called until later, when you click the image

>> The load handler is the code that is called when the page is fully loaded.
When the load handler is called, we assign a handler to the image’s onclick property, 
but it won’t be called until you actually click on the image. So the two handlers 
get called at different times
*/

window.onload = init;

function init() {
	/*getElementById - local variable (gets destroyed at end of function)*/
	var image = document.getElementById("zero");
	image.onclick = showAnswer;
}

function showAnswer() {
	/*getElementById - again local variable, avoid global vars*/
	var image = document.getElementById("zero");
	image.src = "_images/zero.jpg";
}

/*
> document.getElementsByTagName method works a lot like document.getElementById
	>> instead of getting an element by its id, we’re getting elements by tag name, 
	(in this case the tag name “img”)
	>> HTML can include many <img> elements, so this method may return many elements, 
	or one element, or even zero elements
	>> It returns an object that you can treat like an array, but it’s actually an object 
	called a NodeList
*/
window.onload = init;

function init() {
	/*This finds every image in the page and returns them all. 
	We store the resulting images in the images variable*/
	var image = document.getElementsByTagName("img");
	
	/*Iterate over the images, and assign the showAnswer click
	handler to each image in turn*/
	for(var i = 0; i <= images.length; i++) {
		image[i].onclick = showAnswer;
		
		/*Or onmouseover*/
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reblur;
	}
}

/*Remember you’re getting passed an event object each time an image is 
clicked on*/
function showAnswer(eventObject) {
	/*The event object’s target property is a reference to the image 
	element that was clicked*/
	var image = eventObject.target;
	/*We can then use the id property of that object to get the name 
	of the unblurred image*/
	var name = image.id;
	name = "_images/" + name + ".jpg";
	/*And finally, we’ll set the src of the image to that name*/
	image.src = name;
	
	/*Reblur image after 2 seconds - On mouseover no need for setTimeout*/
	setTimeout(reblur, 2000, image);
}

/*Reblur images*/
function reblur(image) {
	var name = image.id;
	name = "_images/" + name + "blur" + ".jpg";
	image.src = name;
}

/*Reblur onmouseover*/
function reblur(eventObject) {
	var image = eventObject.target;
	var name = image.id;
	name = "_images/" + name + "blur" + ".jpg";
	image.src = name;
}


/*
HOW THE EVENT OBJECT WORKS
> When the click handler is called, it’s passed an event object—and in fact, for most
of the events associated with the document object model (DOM) you’ll be passed
an event object. The event object contains general information about the event,
such as what element generated the event and what time the event happened. In
addition, you’ll get information specific to the event, so if there was a mouse click,
for instance, you’ll get the coordinates of the click.

1) The general information includes the target property that holds a reference to the 
object that generated the event. So, if you click on a page element, like an image, 
that’s the target, and we can access it like this
*/
function showAnswer(eventObj) {
	var image = eventObj.target;
}

