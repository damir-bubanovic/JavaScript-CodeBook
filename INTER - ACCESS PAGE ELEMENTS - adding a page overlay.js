/*

!!INTER - ACCESS PAGE ELEMENTS - ADDING A PAGE OVERLAY!!

> You want to overlay the web page in order to display a message, photo, or form

*.createElement() - returns a collection of a node's child nodes, as a NodeList object
*.setAttribute() - adds the specified attribute to an element, and gives it the specified value
*.appendChild() - appends a node as the last child of a node
*.removeChild() - removes a specified child node of the specified element

*/

/*
SOLUTION STEPS:
1) Provide a stylesheet setting for a div element that is sized and positioned to cover the
entire web page. It could be completely opaque, but most overlays are transparent
enough to see the underlying page material

2) Create a div element (or other element) on demand, adding whatever other content is
to be displayed to the element

3) When the overlay is no longer needed, remove it from the page
*/
1) CSS
.overlay {
	background-color: #000;
	opacity: .7;
	filter: alpha(opacity=70);
	position: absolute; top: 0; left: 0;
	width: 100%; height: 100%;
	z-index: 10;
}

2) JavaScript
function expandOverlay() {
	var overlay = document.createElement("div");
	overlay.setAttribute("id","overlay");
	overlay.setAttribute("class", "overlay");
	document.body.appendChild(overlay);
}

3) JavaScript
function restore() {
	document.body.removeChild(document.getElementById("overlay"));
}


/*
EXAMPLE: Creating an overlay for displaying a message
*/
+) HTML
<body>
	<p>Existing material.</p>
</body>

+) CSS
.overlay {
	background-color: #000;
	opacity: .5;
	filter: alpha(opacity=50);
	position: fixed; top: 0; left: 0;
	width: 100%; height: 100%;
	z-index: 10;
}

.overlaymsg {
	position: absolute;
	background-color: yellow;
	padding: 10px;
	width: 200px;
	height: 200px;
	font-size: 2em;
	z-index: 11;
	top: 50%;
	left: 50%;
	margin-left: -100px;
	margin-top: -100px;
}

+) JavaScript
function displayPopup() {
	// create overlay & append to page
	var overlay = document.createElement("div");
	overlay.setAttribute("id", "overlay");
	overlay.setAttribute("class", "overlay");
	document.body.appendChild(overlay);
	
	// create message & append to overlay
	var msg = document.createElement("div");
	var txt = document.createTextNode("Please join our mailing list! (Click to close.)");
	msg.appendChild(txt);
	msg.setAttribute("id", "msg");
	msg.setAttribute("class", "overlaymsg");
	
	// click to restore page
	msg.onclick = restore;
	
	// append message to overaly
	document.body.appendChild(msg);
}


// restore page to normal
function restore() {
	document.body.removeChild(document.getElementById("overlay"));
	document.body.removeChild(document.getElementById("msg"));
}

window.onload = function() {
	displayPopup();
}
