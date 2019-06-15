/*

!!INTER - WEB EFFECTS - Creating a Dynamic Line Chart in Canvas!!

> You want to display a line chart in your web page, but the data changes over time, and
you want to dynamically update it

> All modern browsers support the Canvas element and 2D API. Mozilla provides a solid
Canvas tutorial

*/

/*
SOLUTION:
+) Use the canvas element and the path method to create the chart. When the data changes,
update the chart
*/
+)
var array1 = [
	[100,100], [150, 50], [200,185],
	[250, 185], [300,250], [350,100], [400,250],
	[450, 100], [500,20], [550,80], [600, 120]
];

var imgcanvas = document.getElementById("imgcanvas");
if(imgcanvas.getContext) {
	var ctx = imgcanvas.getContext('2d');
	
	// rect one
	ctx.strokeRect(0,0,600,300);
	
	// line path
	ctx.beginPath();
	ctx.moveTo(0,100);
	
	for(var i = 0; i < array1.length; i++) {
		ctx.lineTo(array1[i][0], array1[i][1]);
	}
	ctx.stroke();
}


/*
EXAMPLE:
+) Using timers to dynamically update a line chart
*/
+) HTML
<canvas id="imgcanvas" width="650" height="350">
<p>Include an image that has a static representation of the chart</p>

+) JavaScript
var points = [[
	[100,100], [150, 50], [200,185],
	[250, 185], [300,250], [350,100], [400,250],
	[450, 100], [500,20], [550,80], [600, 120]],
	[[100,100], [150, 150], [200,135],
	[250, 285], [300,150], [350,150], [400,280],
	[450, 100], [500,120], [550,80], [600, 190]],
	[[100,200], [150, 100], [200,35],
	[250, 185], [300,10], [350,15], [400,80],
	[450, 100], [500,120], [550,80], [600, 120]
]];

var colors = ['black','red','green'];

var imgcanvas = document.getElementById("imgcanvas");

if (imgcanvas.getContext) {
	
	var ctx = imgcanvas.getContext('2d');
	
	// rectangle wrapping line chart
	ctx.strokeRect(0,0,600,300)
	
	points.forEach(function(element, indx, arry) {
		setTimeout(function() {
			// set up beginning
			ctx.beginPath();
			ctx.moveTo(0,100);
			ctx.strokeStyle = colors[indx];
			
			for(var i = 0; i < element.length; i++) {
				ctx.lineTo(element[i][0], element[i][1]);
			}
			ctx.stroke();
		}, indx * 5000);
	});
}