/*

!!INTER - WEB EFFECTS - ACCESSING SVG FROM WEB PAGE SCRIPT!!

> You want to modify the contents of an SVG element from script within the web page

*/

/*
SOLUTION:
1) If the SVG is embedded directly in the web page, access the element and its attributes
using the same functionality you would use with any other web page element

2) However, if the SVG is in an external SVG file embedded into the page via an object
element, you have to get the document for the external SVG file in order to access the
SVG elements. The technique requires object detection because the process differs by
browser
*/
1)
var square = document.getElementById("ssquare");
square.setAttribute("width", "500");

2)
// set element onclick event handler
window.onload=function () {
	var object = document.getElementById("object");
	var svgdoc;
	
	try {
		svgdoc = object.contentDocument;
	} catch(e) {
		
		try {
			svgdoc = object.getSVGDocument();
		} catch (e) {
			alert("SVG in object not supported in your environment");
		}
	}

	if(!svgdoc) {
		return;
	}
	
	var square = svgdoc.getElementById('square');
	square.setAttribute("width", "500");
}


/*
EXAMPLE:
+) Accessing SVG in an object element from script
*/
+) HTML
<object id="object" data="rect.svg"
	style="padding: 20px; width: 600px; height: 600px">
	<p>No SVG support</p>
</object>

+) JavaScript
var object = document.getElementById("object");

object.onload = function() {
	var svgdoc;
	// get access to the SVG document object
	try {
		svgdoc = object.contentDocument;
	} catch(e) {
		try {
			svgdoc = object.getSVGDocument();
		} catch(e) {
			alert("SVG in object not supported in your environment");
		}
	}
	
	if(!svgdoc) return;
		var r = svgdoc.rootElement;
		
		// get SVG element and modify
		var square = svgdoc.getElementById('square');
		square.onclick = function() {
		var width = parseFloat(square.getAttribute("width"));
		width -= 50;
		square.setAttribute("width",width);
		var color = square.getAttribute("fill");
		
		if(color == "blue") {
			square.setAttribute("fill","yellow");
			square.setAttribute("stroke","green");
		} else {
			square.setAttribute("fill","blue");
			square.setAttribute("stroke","red");
		}
	}
}