/*

!!DOM - BASIC!!

> YOU CAN CHANGE CSS RULES AS WELL AS HTML

> DOM -> document object model
> with DOM write pages that are dynamic, pages that react, that respond, 
that update themselves after they’ve been loaded

> When you’re dealing with the DOM it’s important to execute your code only 
after the page is fully loaded
	>> at the bottom of the body element!!!


EXMPLANATION:
1) When you load a page into the browser, not only does the browser parse the HTML and then 
render it to the display, it also creates a set of objects that represent your markup.
	>> These objects are stored in the DOM
2) Your JavaScript can interact with the DOM to get access to the elements and the content in 
them. JavaScript can also use the DOM to create or remove elements
3) When JavaScript modifies the DOM, the browser updates the page dynamically, so you see new 
content on your page


INTERESTING:
1) If you try to get an element from the DOM by id, and that id doesn’t exist in an element, then 
the call to getElementById returns a null value. 
	>> Testing for null is a good idea when you use getElementById to ensure that the element is 
	there before you try to access its properties

*/


/*
EXAMPLE:
1) code sets the variable access to the result of calling the document object’s
getElementById method and passing it “code9”. What gets returned is an element object
2) we take that element (that is, the element with the id “code9”) and we use its 
innerHTML property to get its content, which we assign to the variable code
*/
<body>

<p id="code1">The eagle is in the</p>
...
<p id="code9">My watch stopped at</p>
<p id="code10">barking, can't fly without umbrella.</p>

<script src="javaCode.js" type="text/javascript">
</script>

</body>

1)
var access = document.getElementById("code9");
2)
var code = access.innerHTML;

document.write(code + " midnight");

/*
Change value of HTML (element object)
	> put script for this in the head
*/
var access = document.getElementById("code9");
access.innerHTML = "We'll see you at ";

//<p id="code9">We'll see you at</p>



/*
DOM
> few things you can do with element objects
	1) Get the content (text or HTML).
	2) Read an attribute.
	3) Change the content.
	4) Add an attribute.
	5) Change an attribute.
	6) Remove an attribute.
	7) Find innerHTML
*/
1)
var planet = document.getElementById("greenplanet");
var planetText = planet.innerHTML;

3)
var planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert: hit by phaser fire!";


7)
var planet = document.getElementById("greenplanet");
console.log(planet.innerHTML);
