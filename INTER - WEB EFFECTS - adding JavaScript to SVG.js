/*

!!INTER - WEB EFFECTS - ADDING JAVASCRIPT TO SVG!!

> You want to add JavaScript to an SVG file or element

*/

/*
SOLUTION:
> JavaScript in SVG is included in script elements, just as with HTML, except with the
addition of CDATA markup surrounding the script in case XHTML-sensitive characters,
such as < and >

+) Demonstration of JavaScript within an SVG file
*/
+)
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="600">
<script type="text/ecmascript">
<![CDATA[

// set element onclick event handler
window.onload=function () {
	
	var square = document.getElementById("square");
	
	// onclick event handler, change circle radius
	square.onclick = function() {
		var color = this.getAttribute("fill");
		
		if (color == "#ff0000") {
			this.setAttribute("fill", "#0000ff");
		} else {
			this.setAttribute("fill","#ff0000");
		}
	}
}

]]>
</script>
<rect id="square" width="400" height="400" fill="#ff0000"
x="10" y="10" />
</svg>


/*
EXAMPLE:
> SVG element embedded into an HTML page
*/
<!DOCTYPE html>
<html>

<head>
<title>Accessing Inline SVG</title>
<meta charset="utf-8">
</head>

<body>
<svg width="600" height="600">

<script>

// set element onclick event handler
window.onload=function () {
	var square = document.getElementById("square");
	
	// onclick event handler, change circle radius
	square.onclick = function() {
		var color = this.getAttribute("fill");
		
		if (color == "#ff0000") {
			this.setAttribute("fill","#0000ff");
		} else {
			this.setAttribute("fill","#ff0000");
		}
	}
}
</script>

<rect id="square" width="400" height="400" fill="#ff0000" x="10" y="10" />
</svg>

</body>
</html>