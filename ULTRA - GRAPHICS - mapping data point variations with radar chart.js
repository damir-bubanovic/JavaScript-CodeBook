/*

!!ULTRA - GRAPHICS - MAPPING DATA POINT VARIATIONS WITH RADAR CHART!!

> You’re interested in creating a radar chart, which is a way of visualizing multivariate or
multiple simultaneous data points. But you don’t want to try to put something like that
together from scratch

*/

/*
SOLUTION:
> Use a library like chart.js to create the radar chart
+) Charting three different recipes using a radar chart created with chart.js
*/
+) HTML
<canvas id="myChart" width="400" height="400"></canvas>

+) JavaScript
// HEAD
<script src="Chart.js">

// BODY
var data = {
	labels: ["Calories","Health","Difficulty","Expense","Taste",
	"Responsible","Time"],
	datasets: [
	
		{
		label: "Cheddar Cheese Crackers",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [60, 50, 90, 50, 80, 80, 70]
		},
		
		{
		label: "Chocolate Chip Cookies",
		fillColor: "rgba(151,187,205,0.2)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [95, 20, 10, 70, 90, 90, 40]
		},
		
		{
		label: "Oatmeal Date Cookies",
		fillColor: "rgba(205,205,0,0.2",
		strokeColor: "rgba(151,151,0,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "white",
		pointHighlightStroke: "rgba(151,151,0,1)",
		data: [75, 60, 30, 30, 80, 70, 40]
		}
	]
};

window.onload=function() {
	var ctx = document.getElementById("myChart").getContext("2d");
	var myRadarChart = new Chart(ctx).Radar(data);
}