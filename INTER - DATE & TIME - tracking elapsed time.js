/*

!!INTER - DATE & TIME - TRACKING ELAPSED TIME!!

> want to track the elapsed time between events

*Date - Date object is used to work with dates and times
*setTimeout - calls a function or evaluates an expression after a specified number of milliseconds

*/

/*
SOLUTION
> Create a Date object when the first event occurs, a new Date object when the second
event occurs, and subtract the first from the second. The difference is in milliseconds;
to convert to seconds, divide by 1,000
*/
var firstDate = new Date();

setTimeout(
	function() {
		doEvent(firstDate);
	},
	25000
);

function doEvent() {
	var secondDate = new Date();
	var difference = secondDate - firstDate;
	
	console.log(difference);	// // approx. 25000
}

/*
EXAMPLE:
1) if you add two dates together, the result is a string with the second Date instance 
concatenated to the first
2) If you divide the Date instances, the dates are converted to their millisecond value, and
the result of dividing one by the other is returned. 
3) Multiplying two dates will return a very large millisecond result
*/
1)
Thu Oct 08 2009 20:20:34 GMT-0500 (CST)Thu Oct 08 2009 20:20:31 GMT-0500 (CST)