/*

!!INTER - OTHER - USING FUNCTION CLOSURED WITH TIMERS!!

> want to provide a function with a timer, but you want to add the function directly
into the timer method call

*setInterval() - 	calls a function or evaluates an expression at specified intervals 
					(in milliseconds)
			   -	will continue calling the function until clearInterval() is called, 
			   		or the window is closed
*.getElementById - 	returns the element that has the ID attribute with the specified value
*.style.left - 		sets or returns the left position of a positioned element
			 -		specifies the left position of the element including padding, scrollbar, 
			 		border and margin
*.addEventListener - attaches an event handler to the document
*clearInterval - clears a timer set with the setInterval() method

*/

/*
SOLUTION:
+) Use an anonymous function as first parameter to the setInterval() or setTimeout()
method call
	ADVANTAGE:
	>> Rather than have to clutter up the global space with a function just to use with the timer, 
	you can embed the function directly. 
	>> In addition, you can use a variable local to the scope  of the enclosing function when you 
	use an anonymous function
*/
+)
intervalId = setInterval(
	function() {
		x += 5;
		var left = x + "px";
		document.getElementById("redbox").style.left = left;
	},
	100
);

/*
EXAMPLE:
> simple creating timers
*/
function bing() {
	alert('Bing!');
}

setTimeout(bing, 3000);


/*
EXAMPLE:
> anonymous function within a setInterval() method
> clicking the red box starts the timer, and the box moves. Clicking the box again clears the timer,
and the box stops

Using an anonymous function within a setInterval timer parameter
*/
+) HTML
<div id="redbox"></div>

+) CSS
#redbox {
	position: absolute;
	left: 100px;
	top: 100px;
	width: 200px; height: 200px;
	background-color: red;
}

+) JavaScript
var intervalId = null;

document.getElementById("redbox").addEventListener("click", startBox, false);


function startBox() {
	if(intervalId == null) {
		var x = 100;
		
		intervalId = setInterval(
			function() {
				x += 5
				var left = x + "px";
				document.getElementById("redbox").style.left = left;
			},
			100
		);
	} else {
		clearInterval(intervalId);
		intervalId = null;
	}	
}