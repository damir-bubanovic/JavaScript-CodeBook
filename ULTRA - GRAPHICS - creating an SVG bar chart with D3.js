/*

!!ULTRA - GRAPHICS - CREATING AN SVG BAR CHART WITH D3!!

> You want to create a scalable bar chart, but you’re hoping to avoid having to create every
last bit of the graphics

> Look up more from the web

*/

/*
SOLUTION:
> Use D3 and SVG to create a bar chart bound to a set of data your application provides
> shows a vertical bar chart created using D3 with a given set of data representing
the height of each bar
+) SVG bar chart created using D3
*/
+) CSS
svg {
	background-color: #ff0;
}

+) JavaScript
// HEAD
<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.js">

// BODY
var data = [56, 99, 14, 12, 46, 33, 22, 100, 87, 6, 55, 44, 27, 28, 34];

var height = 400;
var barWidth = 25;

var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, height]);

svg = d3.select("body")
	.append("svg")
	.attr("width", data.length * (barWidth +1))
	.attr("height", height);

svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr("fill","red")
	.attr("stroke","black")
	.attr("x", function(d,i) {
	return i * (barWidth + 1);
	})
	.attr("y", function(d) {
	return height - (x(d));
	})
	.attr("width", barWidth)
	.attr("height", x);