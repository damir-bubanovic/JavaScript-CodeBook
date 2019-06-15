/*

!!INTER - WEB EFFECTS - INTEGRATING SVG & THE CANVAS ELEMENTS IN HTML!!

> You want to use the canvas element and SVG together within a web page

*/

/*
EXAMPLE:
1) One option is to embed both the SVG and the canvas element directly into the HTML
page, and then access the canvas element from script within SVG

2) Or you can embed the canvas element as a foreign object directly in the SVG
*/
1)
<body>

<canvas id="myCanvas" width="400px" height="100px">
	<p>canvas item alternative content</p>
</canvas>

<svg id="svgelem" height="400">
<title>SVG Circle</title>

<script type="text/javascript">
window.onload = function () {
	var context = document.getElementById("myCanvas").getContext('2d');
	context.fillStyle = 'rgba(0, 200, 0, 0.7)';
	context.fillRect(0, 0, 100, 100);
};
</script>

<circle id="redcircle" cx="100" cy="100" r="100" fill="red" stroke="#000" />
</svg>

</body>

2)
<body>

<svg id="svgelem" height="400" width="600">

<script type="text/javascript">
window.onload = function () {
	var context2 = document.getElementById("thisCanvas").getContext('2d');
	context2.fillStyle = "#ff0000";
	context2.fillRect(0, 0, 200, 200);
};
</script>

<foreignObject width="300" height="150">
	<canvas width="300" height="150" id="thisCanvas">alternate content for browsers that do not support Canvas</canvas>
</foreignObject>
<circle id="redcircle" cx="300" cy="100" r="100" fill="red" stroke="#000" />
</svg>

</body>